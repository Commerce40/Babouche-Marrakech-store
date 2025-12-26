import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const HomePage = ({ lang, t }) => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
        <img 
          src="/images/balghati1.jpg" // À ajouter dans public/images/
          alt="Banner" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            {t.siteTitle}
          </motion.h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto">
            {t.footerText}
          </p>
        </div>
      </div>

      {/* Collection */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">{t.collectionTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;