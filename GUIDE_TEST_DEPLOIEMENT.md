# 🧪 GUIDE DE TEST ET DÉPLOIEMENT
## Babouche Marrakech - Audit UX Complété

---

## ✅ CHECKLIST PRÉ-DÉPLOIEMENT

### 1. Vérification Locale

#### Tests sur Mobile (< 640px)
- [ ] Slider horizontal visuel sur page d'accueil
- [ ] Pas de scrollbar visible
- [ ] Swipe fluide avec doigt
- [ ] Gradient d'indication visible à droite
- [ ] Produits cliquables → Redirection `/produit/{slug}`
- [ ] Page produit : Galerie images responsive
- [ ] Produits similaires : Slider horizontal réutilisé
- [ ] Lazy loading images : Chargement au scroll

#### Tests sur Tablet (640-767px)
- [ ] Grille 2 colonnes active
- [ ] Pas de slider
- [ ] Cartes produits bien espacées
- [ ] Responsive transitions fluides

#### Tests sur Desktop (≥ 768px)
- [ ] Grille 4 colonnes visible
- [ ] Pas de slider
- [ ] Gap entre cartes corrects (2rem/2.5rem)
- [ ] Produits similaires : Grille aussi
- [ ] Scrollbar naturelle sur galerie produit

#### Tests de Redirection
- [ ] `/` → Page d'accueil avec slider
- [ ] `/produit/babouche-super-royal-classique` → Page produit détail
- [ ] `/produit/{slug-invalide}` → Message "Produit introuvable"
- [ ] Changement de produit → Slug dans URL se met à jour
- [ ] Clic produit similaire → Slug se met à jour

### 2. Vérification Performance

#### Images
- [ ] Lazy loading actif : Inspecteur > Network > "lazy" images
- [ ] Format WebP supporté (BABOUCHE_ROYALE_1_WEBP)
- [ ] Aucune image dupliquée en chargement
- [ ] Temps de chargement page : < 2s

#### Scrolling
- [ ] Slider smooth scrolling (pas saccadé)
- [ ] Page globale scroll : 60fps
- [ ] Aucun lag lors du swipe

#### Bundle Size
- [ ] Aucune nouvelle dépendance ajoutée
- [ ] CSS natif (scroll-snap) utilisé
- [ ] JavaScript minifié

### 3. Vérification Compatibilité

#### Navigateurs
- [ ] Chrome (dernière version)
- [ ] Firefox (dernière version)
- [ ] Safari (mobile + desktop)
- [ ] Edge (Windows)
- [ ] Samsung Internet (si applicable)

#### Devices
- [ ] iPhone 12/13/14/15
- [ ] Android (Samsung, etc.)
- [ ] iPad / Tablet Android
- [ ] Desktop MacBook / Windows

### 4. Vérification Accessibility

- [ ] Navigation clavier (Tab)
- [ ] Liens correctement identifiés
- [ ] Images avec alt text
- [ ] Contraste couleurs OK
- [ ] Pas d'erreurs console (F12)

---

## 🚀 DÉPLOIEMENT

### Avant le Déploiement
```bash
# 1. S'assurer que le code compile sans erreurs
npm run build

# 2. Vérifier la structure du build
ls dist/

# 3. Vérifier qu'aucun warning à la build
```

### Processus de Déploiement (Vercel)
```bash
# 1. Commit les changements
git add .
git commit -m "feat: implement mobile-first product slider UX audit"

# 2. Push vers main
git push origin main

# 3. Vercel déploie automatiquement
# → Vérifier https://babouche-marrakech.vercel.app
```

### Post-Déploiement
- [ ] Site accessible en ligne
- [ ] Pas d'erreurs 404
- [ ] Slider fonctionne sur mobile prod
- [ ] Images chargées (lazy loading)
- [ ] Slugs dans URLs valides

---

## 📊 MONITORING POST-DÉPLOIEMENT

### Métriques à Suivre (Google Analytics + Facebook Pixel)

#### Données UX
- **Page Views** : Augmentation du temps passé ?
- **Scroll Depth** : Utilisateurs voient plus de produits ?
- **Click Through Rate** : Plus de clics sur produits ?
- **Conversion Rate** : Plus de paniers / commandes ?

#### Events Pixel Facebook
```javascript
// Track automatiquement
- ViewContent : Visites page produit (trackEvent dans ProductDetailPage)
- AddToCart : Ajouts au panier
- Purchase : Commandes
```

#### Mobile vs Desktop
- Amélioration sur mobile > desktop ?
- Temps passé augmente sur mobile ?

---

## ❌ DÉPANNAGE

### Problème : Slider ne scroll pas
**Solution** :
- Vérifier que ProductSlider.css est importé dans ProductSlider.jsx
- Vérifier que `.product-slider { overflow-x: auto; }` est actif
- Vérifier que `.product-slider-item { min-width: 160px; }` est set

### Problème : Scrollbar visible sur mobile
**Solution** :
- Vérifier CSS : `.product-slider::-webkit-scrollbar { display: none; }`
- Ajouter `scrollbar-width: none;` pour Firefox
- Vérifier que `index.css` est inclus

### Problème : Slugs dans URL ne correspondent pas
**Solution** :
- Vérifier que chaque produit a un `slug` unique dans `products.js`
- Vérifier que ProductDetailPage utilise `useParams().slug`
- Vérifier que ProductCard utilise `to={`/produit/${product.slug}`}`

### Problème : Produits similaires ne s'affichent pas
**Solution** :
- Vérifier que SimilarProducts.jsx importe PRODUCTS (pas products)
- Vérifier que ProductSlider.jsx existe
- Vérifier que ProductDetailPage inclut `<SimilarProducts />`

### Problème : Images ne chargent pas en lazy
**Solution** :
- Vérifier `loading="lazy"` sur `<img>` tags
- Vérifier que l'image est visible avant load
- Inspecter Network > filter par "lazy" si besoin

---

## 📈 OPTIMISATIONS FUTURES

### Phase 2 (À considérer)
- [ ] Ajouter des filtres par catégorie (Babouches / Jellabas / Promos)
- [ ] Ajouter un système de favoris
- [ ] Pagination ou "Load More" pour plus de produits
- [ ] Reviews / Ratings produits
- [ ] Promotions en bannière
- [ ] Recherche produits (search bar)

### Phase 3 (À long terme)
- [ ] Panier avancé (estimation livraison en temps réel)
- [ ] Paiement intégré (Wave, Orange Money, etc.)
- [ ] Système de commande multilingue
- [ ] Inventory management
- [ ] Analytics avancées (heatmaps, session recordings)

---

## 🎯 KPIs À MESURER

| KPI | Baseline | Target | Timeline |
|-----|----------|--------|----------|
| Temps passé/session | ? | +30% | 30j |
| Produits vus/session | ? | +50% | 30j |
| Taux clic produit | ? | +25% | 30j |
| Taux ajout panier | ? | +20% | 60j |
| Taux conversion | ? | +15% | 90j |

---

## 👨‍💻 SUPPORT TECHNIQUE

### Questions Fréquentes

**Q: Pourquoi pas Swiper.js ?**
A: CSS natif `scroll-snap` est plus léger, performant et n'ajoute pas de dépendance JavaScript.

**Q: Comment customiser le slider ?**
A: Éditer `ProductSlider.css`:
- `min-width: 160px;` pour la largeur des cartes
- `gap: 1rem;` pour l'espacement
- Media queries pour breakpoints

**Q: Ajouter plus de slugs types ?**
A: Utiliser la fonction `generateSlug()` dans `products.js` pour générer automatiquement à partir du titre.

---

## 📞 CONTACT

En cas de problème :
1. Vérifier AUDIT_UX_IMPLEMENTATION.md
2. Vérifier ce guide de test
3. Vérifier console browser (F12)
4. Vérifier les erreurs avec `npm run build`

---

**Dernière mise à jour** : 8 janvier 2026
**Status** : ✅ Prêt pour production
**Version** : 1.0
