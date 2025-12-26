import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Assurez-vous d'avoir installé lucide-react
import { useCart } from '../contexts/CartContext';
import { usePixel } from '../hooks/usePixel';

const ProductCard = ({ product, lang, t }) => {
  const { addToCart } = useCart();
  const { trackEvent } = usePixel();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    trackEvent('AddToCart', {
      content_ids: [product.sku],
      content_name: product.title[lang],
      value: product.price,
      currency: 'XOF'
    });
    addToCart(product, 1, '42', 'Standard'); 
  };

  const nextImage = (e) => {
    e.preventDefault(); // Empêche le clic sur la carte
    setCurrentImgIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-all">
      <div className="aspect-square bg-gray-100 overflow-hidden relative">
        {/* Image */}
        <img 
          src={product.images[currentImgIndex]} 
          alt={product.title[lang]} 
          className="w-full h-full object-cover transition-transform duration-500"
        />
        
        {/* Badge Promo */}
        {product.specialOffer && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            Promo
          </span>
        )}

        {/* Flèches de navigation (Visibles au survol uniquement sur Desktop, toujours utiles si plusieurs images) */}
        {product.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Indicateurs (petits points en bas) */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {product.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-1.5 rounded-full transition-all ${idx === currentImgIndex ? 'w-3 bg-white' : 'w-1.5 bg-white/50'}`} 
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{product.title[lang]}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-indigo-600 font-bold">{product.price.toLocaleString()} FCFA</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">{product.oldPrice.toLocaleString()} FCFA</span>
          )}
        </div>
        <button 
          onClick={handleQuickAdd}
          className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          {t.addToCart}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;