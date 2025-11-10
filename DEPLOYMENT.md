# 🚀 Guide de Déploiement sur Netlify

Bienvenue! Ce guide vous aidera à publier votre blog "Écrire & Créer" sur Netlify.

## Prérequis

- ✅ Compte GitHub (gratuit)
- ✅ Compte Netlify (gratuit)
- ✅ Git installé sur votre ordinateur
- ✅ Dépôt Git local initialisé (déjà fait!)

## Étape 1: Créer un Dépôt sur GitHub

### 1.1 Créer un compte GitHub (si vous n'en avez pas)
- Allez sur [github.com](https://github.com)
- Cliquez sur "Sign up"
- Remplissez le formulaire et terminez l'inscription

### 1.2 Créer un nouveau dépôt
- Connectez-vous à GitHub
- Cliquez sur le "+" en haut à droite → "New repository"
- Nommez votre dépôt: `pbl-writing-blog`
- Sélectionnez "Public"
- **NE COCHEZ PAS** "Initialize this repository with a README"
- Cliquez sur "Create repository"

### 1.3 Ajouter le dépôt distant

Exécutez ces commandes dans PowerShell (dans le dossier du projet):

```powershell
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/pbl-writing-blog.git
git branch -M main
git push -u origin main
```

**Remplacez `VOTRE_NOM_UTILISATEUR` par votre nom d'utilisateur GitHub réel!**

Lors de la première tentative, vous verrez un dialogue d'authentification GitHub. Authentifiez-vous avec vos identifiants GitHub.

## Étape 2: Déployer sur Netlify

### 2.1 Créer un compte Netlify
- Allez sur [netlify.com](https://netlify.com)
- Cliquez sur "Sign up"
- **Sélectionnez "Sign up with GitHub"** (c'est plus facile!)
- Autorisez Netlify à accéder à vos dépôts GitHub

### 2.2 Connecter votre dépôt à Netlify
1. Sur le tableau de bord Netlify, cliquez sur **"New site from Git"**
2. Sélectionnez **GitHub** comme fournisseur Git
3. Cherchez et sélectionnez le dépôt `pbl-writing-blog`
4. Vérifiez les paramètres de build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 (par défaut c'est ok)

5. Cliquez sur **"Deploy site"** 🎉

### 2.3 Attendre le déploiement
Netlify va automatiquement:
- ✅ Construire votre site
- ✅ Générer une URL temporaire
- ✅ Publier votre blog en ligne

Cela prend généralement 2-3 minutes.

## Étape 3: Obtenir une URL Personnalisée (Optionnel)

### 3.1 Renommer votre site
1. Dans le tableau de bord Netlify, allez à **Site settings**
2. Cliquez sur **Change site name**
3. Entrez un nom personnalisé (ex: `ecrire-et-creer-blog`)
4. Votre URL sera: `https://ecrire-et-creer-blog.netlify.app`

### 3.2 Utiliser votre propre domaine (Optionnel)
1. Achetez un domaine chez:
   - Namecheap
   - GoDaddy
   - OVH
   - Ou tout autre registrar

2. Dans les paramètres Netlify:
   - Allez à **Domain management**
   - Cliquez sur **Add domain**
   - Suivez les instructions pour configurer les DNS

## Étape 4: Mises à Jour Futures

Chaque fois que vous modifiez votre site:

```powershell
# Apportez vos modifications dans les fichiers

# Committez vos changements
git add .
git commit -m "Description de vos changements"

# Poussez vers GitHub
git push origin main
```

**Netlify va automatiquement déployer la nouvelle version!** ✨

## Dépannage

### Le déploiement échoue
- Vérifiez que `npm run build` fonctionne localement
- Consultez les logs de Netlify dans l'onglet "Deploys"

### Le site n'affiche pas les styles Tailwind
- Assurez-vous que `@tailwind` est dans `src/styles/globals.css`
- Vérifiez que `tailwind` est configuré dans `astro.config.mjs`

### Les images ne s'affichent pas
- Vérifiez le chemin complet des images
- Assurez-vous qu'elles sont dans le dossier `public/`

## Configuration du netlify.toml

Votre fichier `netlify.toml` est déjà configuré. Il contient:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Ressources Utiles

- 📚 [Documentation Astro](https://docs.astro.build)
- 🎨 [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- 🚀 [Documentation Netlify](https://docs.netlify.com)
- 💻 [Aide GitHub](https://help.github.com)

## Besoin d'aide?

1. Vérifiez les logs de build dans Netlify
2. Consultez la documentation officielle
3. Cherchez dans Stack Overflow avec votre erreur

---

**Bon déploiement!** 🎉

Votre blog "Écrire & Créer" sera bientôt visible à tous les enseignants et élèves du monde!
