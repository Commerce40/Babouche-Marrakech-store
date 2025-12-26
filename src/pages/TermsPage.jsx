import React from 'react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="max-w-4xl mx-auto px-4 py-16 prose prose-indigo"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales de Vente (CGV)</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">1. Commandes</h2>
        <p className="text-gray-600">
          Les commandes s'effectuent directement via notre site web qui redirige vers WhatsApp. 
          La validation finale de la commande se fait lors de la confirmation par message.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">2. Prix et Paiement</h2>
        <p className="text-gray-600">
          Les prix sont indiqués en Francs CFA (XOF). Le paiement s'effectue intégralement 
          <strong> à la livraison</strong> (en espèces ou via Wave/Orange Money) pour les clients résidant à Dakar.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">3. Livraison</h2>
        <p className="text-gray-600">
          Nous livrons partout au Sénégal.
          <br/>- <strong>Dakar :</strong> Livraison souvent gratuite ou à frais réduits sous 24h/48h.
          <br/>- <strong>Régions :</strong> Expédition via les services de transport habituels, frais à la charge du client.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">4. Retours et Échanges</h2>
        <p className="text-gray-600">
          Si la taille ne convient pas, vous disposez de <strong>48 heures</strong> après réception pour demander un échange. 
          Le produit doit être neuf, jamais porté en extérieur, et dans son emballage d'origine. 
          Les frais de retour peuvent être à la charge du client sauf en cas d'erreur de notre part.
        </p>
      </section>
    </motion.div>
  );
};

export default TermsPage;