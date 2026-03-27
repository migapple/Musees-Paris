# Version 1.1
- Ajout nos autres App
- supression double clic

# Musées de Paris

Application iOS guide des musées parisiens, développée avec Capacitor 6 (HTML/CSS/JS).

## Fonctionnalités

- **37 musées parisiens** avec coordonnées GPS, horaires, tarifs et description
- **Carte interactive** OpenStreetMap avec marqueurs
- **Favoris** persistants
- **Recherche** sans accentuation (musee → Musée)
- **Filtres** par type d'exposition
- **Fiches détail** avec œuvres phares
- **Bilingue** français / anglais
- **Mode sombre / clair**
- Navigation bas de page : Liste · Carte · Favoris

## Stack technique

- [Capacitor 6](https://capacitorjs.com/) — wrapper iOS natif
- HTML / CSS / JavaScript — app mono-fichier `www/index.html`
- [Leaflet](https://leafletjs.com/) — carte interactive
- [OpenStreetMap](https://www.openstreetmap.org/) — tuiles cartographiques
- Images locales dans `www/assets/`

## Structure du projet

```
musees-paris/
├── www/
│   ├── index.html        # App complète (HTML + CSS + JS)
│   └── assets/           # Photos des musées et œuvres
├── ios/                  # Projet Xcode généré par Capacitor
├── capacitor.config.json
├── package.json
└── privacy-policy.html   # Politique de confidentialité (FR + EN)
```

## Installation

```bash
npm install
npx cap add ios
npx cap sync ios
npx cap open ios
```

Puis Build & Run dans Xcode (`Cmd + R`).

## Ajouter un musée

Dans `www/index.html`, ajouter un objet dans le tableau `const MS = [` :

```js
{
  id: 38,
  name: { fr: "Nom du musée", en: "Museum name" },
  address: "Adresse, 75000 Paris",
  coords: { lat: 48.8600, lng: 2.3500 },
  website: "https://",
  hours: { fr: "", en: "" },
  price: "",
  types: { fr: ["Art"], en: ["Art"] },
  description: { fr: "", en: "" },
  image: "assets/photo.jpg",
  artworks: []
}
```

Ajouter aussi sa couleur de fallback dans `GRAD` :
```js
38: 'linear-gradient(145deg,#0a1020,#152040,#203060)',
```

## Politique de confidentialité

[Voir privacy-policy.html](./privacy-policy.html)

L'application ne collecte aucune donnée personnelle. Les favoris, la langue et le thème sont stockés uniquement en local sur l'appareil.

## Crédits

- Développé par **Michel Garlandat**
- Conçu avec [Claude](https://claude.ai) · Anthropic
- Données musées : sources officielles et Wikipédia
- Cartographie : © OpenStreetMap contributors

## Licence

Usage personnel. Les contenus (textes, photos) restent la propriété de leurs auteurs respectifs.
