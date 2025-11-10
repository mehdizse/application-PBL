# 🎓 Écrire & Créer - Blog d'Apprentissage par Projet

Un blog éducatif moderne et magnifique pour valoriser les productions écrites des élèves et démontrer l'efficacité de l'apprentissage par projet.

## ✨ Caractéristiques

- 🏠 **Accueil Dynamique**: Présentation du projet et ses objectifs pédagogiques
- 📖 **Page À Propos**: Explication détaillée de l'apprentissage par projet
- ✍️ **Productions d'Élèves**: Vitrine des textes, poèmes et articles des élèves
- 📱 **Design Responsive**: Parfait sur tous les appareils (mobile, tablette, desktop)
- 🎨 **Tailwind CSS**: Design moderne et professionnel
- 🚀 **Astro Framework**: Performance optimale et chargement rapide
- 🌍 **100% Français**: Interface et contenu entièrement en français

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ installé
- Git installé

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/VOTRE_UTILISATEUR/pbl-writing-blog.git
cd pbl-writing-blog

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📦 Build pour Production

```bash
# Construire le site
npm run build

# Prévisualiser le build
npm run preview
```

## 🌐 Déploiement sur Netlify

### Option 1: Déploiement Automatique (Recommandé)

1. **Créer un dépôt GitHub**:
   ```bash
   git remote add origin https://github.com/VOTRE_UTILISATEUR/pbl-writing-blog.git
   git branch -M main
   git push -u origin main
   ```

2. **Connecter à Netlify**:
   - Allez sur [netlify.com](https://netlify.com)
   - Cliquez sur "New site from Git"
   - Sélectionnez votre dépôt GitHub
   - Netlify détectera automatiquement la configuration

3. **Déployer**:
   - Cliquez sur "Deploy site"
   - Votre blog sera en ligne en quelques minutes! 🎉

### Option 2: Déploiement Manuel

```bash
# Build le site
npm run build

# Drag & drop le dossier 'dist' sur netlify.com
```

👉 **Voir le fichier [DEPLOYMENT.md](./DEPLOYMENT.md) pour un guide complet.**

## 📁 Structure du Projet

```
pbl-writing-blog/
├── src/
│   ├── pages/
│   │   ├── index.astro          # Page d'accueil
│   │   ├── about.astro          # À propos
│   │   └── posts/               # Articles blog
│   ├── components/
│   │   ├── Header.astro         # Navigation
│   │   ├── Footer.astro         # Pied de page
│   │   └── PostCard.astro       # Carte d'article
│   ├── layouts/
│   │   ├── BaseLayout.astro     # Layout principal
│   │   └── PostLayout.astro     # Layout article
│   ├── styles/
│   │   └── globals.css          # Styles Tailwind
│   └── data/
│       └── authors.json         # Données auteurs
├── public/                       # Ressources statiques
├── astro.config.mjs             # Config Astro
├── tailwind.config.mjs          # Config Tailwind
├── netlify.toml                 # Config Netlify
└── package.json                 # Dépendances
```

## 🎨 Personnalisation

### Ajouter un Nouvel Article

1. Créer un fichier dans `src/pages/posts/`:
   ```markdown
   ---
   layout: ../../layouts/PostLayout.astro
   title: "Titre de l'Article"
   author: "Nom de l'Auteur"
   date: "2025-11-10"
   ---

   # Contenu en Markdown
   ```

2. Pousser vers GitHub (Netlify va automatiquement déployer)

### Modifier les Couleurs

Éditez `tailwind.config.mjs`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',      // Bleu
      secondary: '#8B5CF6',    // Pourpre
    },
  },
}
```

### Ajouter une Font

Modifiez `src/layouts/BaseLayout.astro` et importez une police Google Fonts.

## 🛠️ Stack Technologique

- **Astro**: Framework web ultra-rapide
- **Tailwind CSS**: Utilitaires CSS pour le design
- **Markdown**: Pour les articles blog
- **JavaScript/TypeScript**: Fonctionnalités interactives

## 📚 Ressources

- 📖 [Documentation Astro](https://docs.astro.build)
- 🎨 [Documentation Tailwind](https://tailwindcss.com)
- 🚀 [Documentation Netlify](https://docs.netlify.com)
- 💾 [Aide GitHub](https://help.github.com)

## 🤝 Contribution

Les contributions sont bienvenues! Pour proposer des améliorations:

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Ajouter une nouvelle feature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est sous license MIT. Voir le fichier [LICENSE](./LICENSE) pour les détails.

## 📧 Support

Des questions? Des problèmes?
- Consultez la [documentation de déploiement](./DEPLOYMENT.md)
- Ouvrez une [Issue GitHub](https://github.com/VOTRE_UTILISATEUR/pbl-writing-blog/issues)
- Contactez l'équipe de support Netlify

---

**Créé pour valoriser l'écriture et montrer la puissance de l'apprentissage par projet!** 🌟

Commencez votre voyage maintenant: `npm run dev` 🚀