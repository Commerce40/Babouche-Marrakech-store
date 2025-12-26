import React from 'react';
import { motion } from 'framer-motion';

const SizeGuidePage = ({ t }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="max-w-4xl mx-auto px-4 py-16 bg-white min-h-screen"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Guide des Tailles</h1>
        <p className="text-lg text-gray-600">Trouvez la pointure parfaite pour vos babouches.</p>
      </div>

      <div className="bg-blue-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-10">
        <h3 className="text-xl font-bold text-indigo-900 mb-2">💡 Le Conseil Babouche Marrakech</h3>
        <p className="text-indigo-800">
          Nos babouches sont fabriquées artisanalement. Pour les modèles à bout pointu (Royal, Daim), 
          <strong> nous vous conseillons vivement de prendre une pointure au-dessus</strong> de votre taille habituelle en baskets.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="p-4">Pointure EU (Votre taille)</th>
              <th className="p-4">Longueur du pied (cm)</th>
              <th className="p-4 bg-indigo-600">Taille Recommandée (Babouche)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {[
              { size: 39, cm: 24.5, rec: 40 },
              { size: 40, cm: 25.0, rec: 41 },
              { size: 41, cm: 25.5, rec: 42 },
              { size: 42, cm: 26.0, rec: 43 },
              { size: 43, cm: 26.5, rec: 44 },
              { size: 44, cm: 27.0, rec: 45 },
              { size: 45, cm: 27.5, rec: 46 },
              { size: 46, cm: 28.0, rec: 47 },
            ].map((row) => (
              <tr key={row.size} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium">{row.size}</td>
                <td className="p-4 text-gray-600">{row.cm} cm</td>
                <td className="p-4 font-bold text-indigo-600">{row.rec}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 space-y-6 text-gray-600">
        <h3 className="text-2xl font-bold text-gray-900">Comment mesurer ?</h3>
        <ol className="list-decimal pl-5 space-y-2 marker:text-indigo-600 marker:font-bold">
          <li>Placez une feuille de papier au sol contre un mur.</li>
          <li>Posez votre pied sur la feuille, le talon bien collé au mur.</li>
          <li>Tracez un trait à l'extrémité de votre orteil le plus long.</li>
          <li>Mesurez la distance entre le bord de la feuille et le trait.</li>
        </ol>
      </div>
    </motion.div>
  );
};

export default SizeGuidePage;