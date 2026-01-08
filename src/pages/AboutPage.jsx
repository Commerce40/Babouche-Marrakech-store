import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = ({ t }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="bg-white min-h-screen"
    >
      {/* En-tête avec Image de fond */}
      <div className="relative h-72 bg-gray-900 overflow-hidden">
        {/* Assure-toi d'avoir une image nommée 'banniere-hero.jpg' ou change le nom ici */}
        <img 
          src="/images/babouche-marocaine-mercedes-bleu-nuit-portée.jpeg" 
          alt="Artisanat" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide shadow-sm">
            {t.aboutTitle || "Notre Histoire"}
          </h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg text-gray-600 mx-auto">
          <p className="text-xl font-medium text-gray-900 mb-6 leading-relaxed">
            Nous ne sommes pas les fabricants, mais les <strong>gardiens de la qualité</strong>.
          </p>
          
          <p className="mb-6">
            Notre mission est de sélectionner pour vous les meilleures pièces de l'artisanat marocain. 
            Nous parcourons les ateliers de Marrakech pour dénicher les babouches qui allient 
            confort moderne et tradition séculaire.
          </p>

          <p className="mb-10">
            Chaque paire est inspectée : la souplesse du cuir, la solidité des coutures et la finesse 
            des finitions. En commandant chez nous, vous n'achetez pas juste une chaussure, 
            vous soutenez un savoir-faire authentique.
          </p>

          <blockquote className="border-l-4 border-indigo-600 pl-4 italic text-gray-800 bg-gray-50 py-4 pr-4 rounded-r-lg">
            "Notre travail n'est pas de fabriquer, mais de découvrir les trésors pour que vous puissiez les porter."
          </blockquote>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;