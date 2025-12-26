import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const SimilarProducts = ({ currentProductId, lang, t }) => {
  // On prend tous les produits SAUF celui qu'on regarde actuellement
  // Et on en garde 3 ou 4 maximum
  const similar = products
    .filter(p => p.id !== currentProductId)
    .slice(0, 4);

  return (
    <div className="mt-16 border-t pt-10">
      <h3 className="text-2xl font-bold mb-6 text-gray-900">
        {lang === 'fr' ? "Vous aimerez aussi" : (lang === 'wo' ? "Yeneen modèle" : "منتجات مماثلة")}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {similar.map(product => (
          <ProductCard key={product.id} product={product} lang={lang} t={t} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;