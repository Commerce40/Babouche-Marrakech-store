import React from 'react';
import { PRODUCTS } from '../data/products';
import ProductSlider from './ProductSlider';

const SimilarProducts = ({ currentProductId, lang, t }) => {
  // Produits similaires : On exclut le produit actuel et on en prend 4-6
  const similar = PRODUCTS
    .filter(p => p.id !== currentProductId)
    .slice(0, 6);

  return (
    <div className="mt-16 border-t pt-10">
      <ProductSlider 
        products={similar} 
        lang={lang} 
        t={t}
        title={lang === 'fr' ? "Vous aimerez aussi" : (lang === 'wo' ? "Yeneen modèle" : "منتجات مماثلة")}
      />
    </div>
  );
};

export default SimilarProducts;