import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { usePixel } from '../hooks/usePixel';
import SimilarProducts from '../components/SimilarProducts';

const ProductDetailPage = ({ lang, t }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  const [activeImage, setActiveImage] = useState('');
  const [size, setSize] = useState('42');
  const [selectedColor, setSelectedColor] = useState('');
  const [customColorText, setCustomColorText] = useState('');
  
  const { addToCart } = useCart();
  const { trackEvent } = usePixel();

  useEffect(() => {
    if (product) {
      setActiveImage(product.images[0]);
      setSelectedColor(product.colors[0]);
      window.scrollTo(0, 0);

      trackEvent('ViewContent', {
        content_ids: [product.sku],
        content_name: product.title[lang],
        value: product.price,
        currency: 'XOF'
      });
    }
  }, [product, id, lang]);

  if (!product) return <div className="p-20 text-center">Produit introuvable</div>;

  // 1. Changement via Bouton Couleur (Met à jour l'image)
  const handleColorChange = (color) => {
    setSelectedColor(color);
    if (product.colorImages && product.colorImages[color]) {
      setActiveImage(product.colorImages[color]);
    }
  };

  // 2. NOUVEAU : Changement via Image (Met à jour la couleur)
  const handleImageClick = (imgUrl) => {
    setActiveImage(imgUrl);
    
    // Recherche inversée : Quelle couleur correspond à cette image ?
    if (product.colorImages) {
        // On cherche la clé (Nom de la couleur) dont la valeur est l'URL de l'image
        const foundColor = Object.keys(product.colorImages).find(
            key => product.colorImages[key] === imgUrl
        );
        
        if (foundColor) {
            setSelectedColor(foundColor);
        }
    }
  };

  const handleAddToCart = () => {
    const finalColor = selectedColor === 'Autre' ? (customColorText || 'Personnalisé') : selectedColor;
    addToCart(product, 1, size, finalColor);
    trackEvent('AddToCart', {
      content_ids: [product.sku],
      value: product.price,
      currency: 'XOF'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-12">
        
        {/* Galerie Images */}
        <div className="space-y-4">
          <motion.div 
            key={activeImage}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative"
          >
            <img 
              src={activeImage} 
              alt={product.title[lang]} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </motion.div>
          
          {/* Miniatures */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                // Utilisation de la nouvelle fonction ici :
                onClick={() => handleImageClick(img)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${activeImage === img ? 'border-indigo-600' : 'border-transparent'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Infos & Choix */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.title[lang]}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl text-indigo-600 font-bold">{product.price.toLocaleString()} FCFA</span>
            {product.oldPrice && (
              <span className="text-xl text-gray-400 line-through">{product.oldPrice.toLocaleString()} FCFA</span>
            )}
            {product.specialOffer && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                {product.specialOffer}
              </span>
            )}
          </div>
          
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">{product.description[lang]}</p>

          {/* Choix des Couleurs */}
          <div className="mb-8">
            <h3 className="font-medium mb-3 text-gray-900">Couleurs disponibles :</h3>
            <div className="flex flex-wrap gap-3">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all
                    ${selectedColor === color 
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-600 ring-offset-2' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                >
                  {color}
                </button>
              ))}
              <button
                onClick={() => setSelectedColor('Autre')}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all
                  ${selectedColor === 'Autre' 
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-600 ring-offset-2' 
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
              >
                Autre / Personnalisé
              </button>
            </div>

            <AnimatePresence>
              {selectedColor === 'Autre' && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }} 
                  animate={{ height: 'auto', opacity: 1 }}
                  className="mt-4 overflow-hidden"
                >
                  <label className="block text-sm text-gray-600 mb-1">Quelle couleur souhaitez-vous ?</label>
                  <input 
                    type="text"
                    value={customColorText}
                    onChange={(e) => setCustomColorText(e.target.value)}
                    placeholder="Ex: Vert Émeraude, Rose Pâle..."
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Choix de la Taille */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-gray-900">Pointure (EU)</h3>
              <span className="text-xs text-indigo-600 font-bold cursor-pointer">Guide des tailles</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[39, 40, 41, 42, 43, 44, 45, 46].map(s => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`w-12 h-12 rounded-lg border font-bold transition-all
                    ${size === s 
                      ? 'border-indigo-600 bg-indigo-600 text-white shadow-lg scale-105' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                >
                  {s}
                </button>
              ))}
            </div>
            {product.sizingTip && (
              <p className="mt-3 text-sm text-blue-600 bg-blue-50 p-2 rounded-lg inline-block border border-blue-100">
                ℹ️ {product.sizingTip}
              </p>
            )}
          </div>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all shadow-xl hover:shadow-2xl transform active:scale-95 flex justify-center items-center gap-2"
          >
            <span>{t.addToCart}</span>
            <span className="text-gray-400 font-normal">| {product.price.toLocaleString()} FCFA</span>
          </button>
        </div>
      </div>

      <SimilarProducts currentProductId={product.id} lang={lang} t={t} />
    </div>
  );
};

export default ProductDetailPage;