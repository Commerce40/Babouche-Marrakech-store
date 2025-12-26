import React, { useState } from 'react';
import { X, Send, MapPin, User, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CheckoutModal = ({ isOpen, onClose, cart, total, lang }) => {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    adresse: '',
    ville: 'Dakar' // Ville par défaut
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- 1. Génération de la Facture pour WhatsApp ---
    const phoneNumber = "221761421653"; // Votre numéro
    let message = `*NOUVELLE COMMANDE WEB* 🛍️\n\n`;
    
    // Infos Client
    message += `👤 *Client:* ${formData.nom}\n`;
    message += `📞 *Tél:* ${formData.telephone}\n`;
    message += `📍 *Adresse:* ${formData.adresse}, ${formData.ville}\n\n`;
    
    message += `--------------------------------\n`;
    message += `📝 *DÉTAIL DE LA COMMANDE:*\n`;

    // Détail Panier
    cart.forEach(item => {
      const title = item.title[lang] || item.title.fr; // Fallback
      message += `- ${title}\n`;
      message += `  (Taille: ${item.size} | Couleur: ${item.color} | Qté: ${item.qty})\n`;
      message += `  Prix: ${(item.price * item.qty).toLocaleString()} FCFA\n\n`;
    });

    message += `--------------------------------\n`;
    message += `💰 *TOTAL À PAYER: ${total.toLocaleString()} FCFA*\n`;
    message += `📦 *Livraison:* Paiement à la réception`;

    // --- 2. Encodage et Ouverture WhatsApp ---
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Optionnel : Vider le panier ou fermer le modal ici
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          {/* Fond sombre */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="bg-gray-900 p-4 flex justify-between items-center text-white">
              <h3 className="font-bold text-lg">Finaliser votre commande</h3>
              <button onClick={onClose} className="hover:bg-gray-700 p-1 rounded-full transition">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg text-sm text-blue-800 mb-4">
                👋 Presque fini ! Remplissez ce formulaire pour envoyer votre facture détaillée sur WhatsApp.
              </div>

              {/* Champ Nom */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input 
                    required type="text" name="nom" value={formData.nom} onChange={handleChange}
                    placeholder="Ex: Moussa Diop"
                    className="w-full pl-10 border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              {/* Champ Téléphone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input 
                    required type="tel" name="telephone" value={formData.telephone} onChange={handleChange}
                    placeholder="Ex: 77 123 45 67"
                    className="w-full pl-10 border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              {/* Champ Adresse */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse de livraison *</label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-3 text-gray-400" />
                  <textarea 
                    required name="adresse" value={formData.adresse} onChange={handleChange}
                    placeholder="Quartier, point de repère précis..."
                    className="w-full pl-10 border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none h-20 resize-none"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all mt-4"
              >
                <span>Envoyer ma commande</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;