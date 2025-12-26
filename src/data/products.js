export const products = [
  {
    id: 1,
    sku: "BM-001",
    price: 18900,
    oldPrice: 25000,
    title: {
      fr: "Babouche Royal Jaune Naturel",
      ar: "بابوش ملكي أصفر طبيعي",
      wo: "Babouche Royal Jaune Naturel"
    },
    description: {
      fr: "L'originale. Babouche royale en cuir pleine fleur, broderies fines et semelle renforcée. Un classique intemporel pour les grandes occasions.",
      ar: "بابوش ملكي من جلد طبيعي، تطريز يدوي ونعل معزز.",
      wo: "Babouche ci cuir, broderie yu rafet ak nàll yu rafet."
    },
    sizingTip: "Taille petit : nous conseillons de prendre une taille au-dessus.",
    colors: ["Jaune Poussin"], 
    images: [
      "/images/bm-001.webp", 
      "/images/bm-001-side.jpeg",
      "/images/bm-001-top.jpeg"
    ]
  },
  {
    id: 2,
    sku: "BM-002",
    price: 12000,
    specialOffer: "3 paires = 30 000 FCFA",
    shippingInfo: "Livraison gratuite sur Dakar",
    title: {
      fr: "Babouche Royal Classique",
      ar: "بابوش ملكي كلاسيكي",
      wo: "Babouche Royal Classique"
    },
    description: {
      fr: "Velours premium, intérieur cuir, semelle souple fait main. L'alliance parfaite du confort et de l'élégance au quotidien.",
      ar: "مخمل فاخر وباطن من الجلد، نعل يدوي مرن.",
      wo: "Velours premium, ndoxum cuir ci digg."
    },
    sizingTip: "Taille normalement : prenez votre pointure habituelle.",
    colors: ["Jaune", "Blanc", "Bleu Ciel", "Rouge Bordeaux", "Bleu Nuit", "Marron Clair", "Marron Foncé", "Gris Clair", "Gris Foncé", "Beige"],
    
    // --- NOUVEAU : Mapping exact basé sur vos fichiers ---
    colorImages: {
      "Jaune": "/images/bm-002-jaune.jpeg",
      "Blanc": "/images/bm-002-blanc.jpeg",
      "Bleu Ciel": "/images/bm-002-bleu-ciel.png",
      "Rouge Bordeaux": "/images/bm-002-rouge-bordeaux.jpeg",
      "Gris Clair": "/images/bm-002-gris-clair.jpg",
      "Beige": "/images/bm-002-beige.jpeg"
      // Ajoutez les autres si vous avez les photos (ex: Bleu Nuit)
    },
    
    images: [
      "/images/bm-002.png",
      "/images/bm-002-side.jpeg",
      "/images/bm-002-detail.jpeg",
      "/images/bm-002-rouge-bordeaux.jpeg", // Ajouté pour le slider home
      "/images/bm-002-bleu-ciel.png",         // Ajouté pour le slider home
      "/images/bm-002-gris-clair.jpg",
      "/images/bm-002-jaune.jpeg",
      "/images/bm-002-blanc.jpeg"
    ]
  },
  {
    id: 3,
    sku: "BM-003",
    price: 15000,
    title: {
      fr: "Babouche Royal en Daim",
      ar: "بابوش ملكي من جلد الغزال",
      wo: "Babouche Royal en Daim"
    },
    description: {
      fr: "La douceur du daim véritable, avec des détails de couture artisanale. Un modèle raffiné pour un look distingué.",
      ar: "نعومة جلد الغزال الأصلي، مع تفاصيل خياطة يدوية.",
      wo: "Daim bu neex, ak ñaw bu rafet."
    },
    sizingTip: "Taille petit : nous conseillons de prendre une taille au-dessus.",
    colors: ["Jaune", "Blanc", "Bleu Ciel", "Rouge Bordeaux", "Bleu Nuit", "Marron Clair", "Marron Foncé", "Gris Clair", "Gris Foncé", "Noir"],
    
    // Pour l'instant, on n'a pas vu de photos couleurs spécifiques dans votre screenshot pour le daim
    // Mais la structure est prête :
    colorImages: {}, 

    images: [
      "/images/bm-003.jpeg",
      "/images/bm-003-side.jpeg",
      "/images/bm-003-detail.jpeg"
    ]
  },
  {
    id: 4,
    sku: "BM-004",
    price: 18000,
    oldPrice: 20000,
    title: {
      fr: "Babouche Royal Mercedes",
      ar: "بابوش رويال مرسيدس",
      wo: "Babouche Royal Mercedes"
    },
    description: {
      fr: "Le design iconique 'Mercedes' revisité. Un modèle prisé pour son style unique et son confort exceptionnel.",
      ar: "تصميم 'مرسيدس' الأيقوني بلمسة جديدة.",
      wo: "Designu 'Mercedes' bu bees. Model bu ñépp bëgg."
    },
    sizingTip: "Taille petit : nous conseillons de prendre une taille au-dessus.",
    colors: ["Jaune", "Blanc", "Bleu Ciel", "Rouge Bordeaux", "Bleu Nuit", "Marron Clair", "Marron Foncé", "Gris Clair", "Gris Foncé", "Beige"],
    
    colorImages: {
      "Blanc": "/images/bm-004-blanc.jpeg",
      "Beige": "/images/bm-004-beige.jpeg",
      "Rouge Bordeaux": "/images/bm-004-rouge-bordeaux.jpeg",
      "Jaune": "/images/bm-004-jaune.png"
    },

    images: [
      "/images/bm-004.jpeg",
      "/images/bm-004-side.jpeg",
      "/images/bm-004-detail.jpeg",
      "/images/bm-004-rouge-bordeaux.jpeg",
      "/images/bm-004-beige.jpeg",
      "/images/bm-004-blanc.jpeg",
      "/images/bm-004-jaune.png"
    ]
  }
];