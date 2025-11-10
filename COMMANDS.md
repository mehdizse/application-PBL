# ⚡ COMMANDES ESSENTIELLES

## 🚀 Démarrage Rapide

### Lancer le serveur local
```powershell
npm run dev
```
Puis ouvrez: http://localhost:3000

### Arrêter le serveur
```
Ctrl + C
```

---

## 📦 Build et Production

### Construire pour production
```powershell
npm run build
```

### Prévisualiser le build local
```powershell
npm run preview
```

---

## 📌 Git et GitHub

### Voir l'état des changements
```powershell
git status
```

### Ajouter tous les changements
```powershell
git add .
```

### Créer un commit
```powershell
git commit -m "Description de vos changements"
```

### Pousser vers GitHub (déploiement automatique)
```powershell
git push origin main
```

### Voir l'historique des commits
```powershell
git log --oneline
```

---

## 🔧 Dépannage

### Installer les dépendances
```powershell
npm install
```

### Mettre à jour les dépendances
```powershell
npm update
```

### Vérifier les problèmes
```powershell
npm audit
```

### Corriger les problèmes
```powershell
npm audit fix
```

---

## 📂 Navigation de Fichiers

### Aller au dossier du projet
```powershell
cd d:\mon_projet\pbl-writing-blog
```

### Voir les fichiers
```powershell
ls
```

### Voir le contenu complet
```powershell
ls -R
```

---

## 💾 Workflow Complet

Quand vous modifiez votre site:

```powershell
# 1. Lancer le serveur (optionnel, pour voir les changements)
npm run dev

# 2. Faire vos modifications dans les fichiers...

# 3. Ajouter les changements
git add .

# 4. Créer un commit
git commit -m "Description brève de vos changements"

# 5. Pousser vers GitHub (Netlify va redéployer)
git push origin main
```

---

## 📝 Ajouter un Nouvel Article

### 1. Créer le fichier
```bash
# Créez un fichier dans src/pages/posts/
# Nommez-le: mon-article.md
```

### 2. Ajouter le contenu
```markdown
---
layout: ../../layouts/PostLayout.astro
title: "Titre de l'Article"
author: "Nom de l'Auteur"
date: "2025-11-10"
---

# Contenu en Markdown

Écrivez votre article ici...
```

### 3. Publier
```powershell
git add .
git commit -m "Ajouter nouvel article: Titre"
git push origin main
```

---

## 🎨 Personnes Fichiers Important

### Modifier le titre du site
**Fichier**: `src/layouts/BaseLayout.astro`
```html
<title>Nouveau Titre</title>
```

### Modifier les couleurs
**Fichier**: `tailwind.config.mjs`
```javascript
colors: {
  primary: '#3B82F6',      // Changez ces valeurs
  secondary: '#8B5CF6',
}
```

### Modifier le contenu d'accueil
**Fichier**: `src/pages/index.astro`

### Modifier la page À propos
**Fichier**: `src/pages/about.astro`

---

## 🔍 Commandes Utiles Supplémentaires

### Nettoyer le cache
```powershell
npm run clean
```

### Formater le code
```powershell
npm run format
```

### Vérifier la syntaxe
```powershell
npm run lint
```

---

## 📊 Voir les Logs Netlify

1. Allez sur https://netlify.com
2. Connectez-vous
3. Cliquez sur votre site
4. Allez à "Deploys"
5. Cliquez sur le dernier déploiement
6. Allez à "Deploy log" pour voir les logs

---

## ✅ Vérification Avant de Pousser

Avant de faire `git push`:

1. Testez localement:
   ```powershell
   npm run build
   npm run preview
   ```

2. Vérifiez pas d'erreurs:
   ```powershell
   npm run lint
   ```

3. Assurez-vous que tout fonctionne:
   ```powershell
   git status
   ```

4. Alors vous pouvez faire:
   ```powershell
   git push
   ```

---

## 🆘 Erreurs Communes

| Erreur | Solution |
|--------|----------|
| `npm: command not found` | Installer Node.js |
| `git: command not found` | Installer Git |
| `port 3000 already in use` | Arrêter l'autre serveur |
| `Permission denied` | Vérifier les droits d'accès |
| `Build failed` | Vérifier `npm run build` localement |

---

## 📞 Besoin d'Aide sur une Commande?

```powershell
# Aide générale npm
npm help

# Aide sur une commande spécifique
npm help run

# Aide git
git help

# Aide sur une commande git spécifique
git help push
```

---

**Vous êtes Maintenant un Expert des Commandes!** 🎉
