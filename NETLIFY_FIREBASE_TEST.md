# ✅ Guide: Vérifier que Firebase Fonctionne avec Netlify

## 📋 Vue d'ensemble

Après avoir configuré les variables d'environnement sur Netlify et déployé, tu dois **vérifier que Firebase fonctionne réellement** en production.

---

## 🚀 Étape 1: Redéployer sur Netlify

### Option A: Redéploiement Manuel

1. Va sur le Dashboard Netlify
2. Onglet **"Deployments"**
3. Clique **"Trigger deploy"**
4. Sélectionne **"Deploy site"**
5. Attends que le build se termine ✅

### Option B: Redéploiement Automatique (Git Push)

```powershell
cd d:\mon_projet\pbl-writing-blog
git add .
git commit -m "🔄 Test Firebase sur Netlify"
git push origin main
```

**Netlify redéploiera automatiquement!**

---

## ✅ Test 1: Vérifier que la Page /login Charge

### Étape 1: Aller sur ton site

```
https://ton-site.netlify.app/login
```

**Tu devrais voir:**
- ✅ Formulaire "Créer un compte"
- ✅ Formulaire "Se connecter"
- ✅ Les deux onglets (Sign Up / Sign In)

### Étape 2: Si la page ne charge pas

```
❌ Page blanche
❌ Erreur 404
❌ Erreur Firebase
```

**Vérifications:**

1. **Va dans les DevTools (F12)**
2. **Onglet "Console"**
3. **Cherche les erreurs:**

```javascript
// ❌ Erreur si variables manquantes:
"❌ Firebase configuration is not set! Please configure .env.local"

// ❌ Erreur si clé API invalide:
"auth/invalid-api-key"

// ❌ Erreur si domaine non autorisé:
"PERMISSION_DENIED"
```

---

## ✅ Test 2: Créer un Compte sur Netlify

### Étape 1: Remplir le formulaire "Sign Up"

```
Nom:      Mon Nom
Email:    test@example.com
Mot de passe: MonMotDePass123!
```

### Étape 2: Cliquer "Sign Up"

**Si ça fonctionne:**
- ✅ Message de succès
- ✅ Page redirigée vers /admin
- ✅ Le bouton "Déconnexion" apparaît

**Si ça ne fonctionne pas:**
- ❌ Message d'erreur
- ❌ L'utilisateur n'est pas créé

### Étape 3: Vérifier dans Firebase Console

1. Va sur [console.firebase.google.com](https://console.firebase.google.com)
2. Sélectionne ton projet "learnpbl"
3. **Authentication** (menu à gauche)
4. **Users** (onglet)

**Tu devrais voir:**

```
┌─────────────────────────────────────┐
│ Users                                │
├─────────────────────────────────────┤
│ Email              │ Date Created    │
├────────────────────┼─────────────────┤
│ test@example.com   │ 5 min ago       │ ← TON NOUVEL UTILISATEUR!
└─────────────────────────────────────┘
```

✅ **Si l'utilisateur apparaît = Firebase fonctionne!**

---

## ✅ Test 3: Publier un Article sur /admin

### Étape 1: Aller sur /admin

```
https://ton-site.netlify.app/admin
```

### Étape 2: Tu dois être connecté

**Si tu n'es pas connecté:**
- Redirected vers /login
- Clique "Sign In"
- Utilise: `test@example.com` / `MonMotDePass123!`

**Si tu es connecté:**
- ✅ Tu vois le formulaire d'admin
- ✅ Onglets: "Ajouter un Article Texte" / "Ajouter un Article Photo"
- ✅ Bouton "Déconnexion"

### Étape 3: Publier un Article Texte

**Remplis le formulaire:**

```
Titre:        Mon premier article
Auteur:       Mehdi
Niveau:       CM2
Tags:         écriture, histoire
Contenu:      Ceci est mon premier article publié sur Netlify!
Format:       Texte
```

**Clique "Publier l'article"**

**Si ça fonctionne:**
- ✅ Message "Article publié avec succès!"
- ✅ Le formulaire se vide
- ✅ L'article apparaît dans la base de données

### Étape 4: Vérifier dans Firebase Console

1. Va sur [console.firebase.google.com](https://console.firebase.google.com)
2. Sélectionne ton projet "learnpbl"
3. **Firestore Database** (menu à gauche)
4. Collection **"articles"**

**Tu devrais voir:**

```
┌─────────────────────────────────────────────┐
│ articles                                     │
├─────────────────────────────────────────────┤
│ Document ID  │ titre      │ auteur │ niveau │
├──────────────┼────────────┼────────┼────────┤
│ abc123xyz... │ Mon premier│ Mehdi  │ CM2   │ ← TON ARTICLE!
│              │ article    │        │       │
└─────────────────────────────────────────────┘
```

✅ **Si l'article apparaît = Firebase Firestore fonctionne!**

---

## ✅ Test 4: Vérifier la Galerie Publique

### Étape 1: Aller sur /gallery

```
https://ton-site.netlify.app/gallery
```

### Étape 2: Tu devrais voir ton article

**Si ça fonctionne:**
- ✅ L'article "Mon premier article" apparaît
- ✅ Tu peux voir: titre, auteur, niveau, tags
- ✅ Un bouton "Voir plus" pour lire l'article complet

**Si ça ne fonctionne pas:**
- ❌ Galerie vide
- ❌ Erreur dans la console

### Étape 3: Vérifier dans la Console (F12)

```javascript
// Ouvre DevTools (F12)
// Onglet "Console"
// Cherche les logs:

✅ "📦 Articles chargés: 1"
✅ "🔍 Filtrés: 1"

❌ Erreurs Firebase?
```

---

## ✅ Test 5: Tester avec une Photo

### Étape 1: Aller sur /admin

```
https://ton-site.netlify.app/admin
```

### Étape 2: Sélectionner "Ajouter un Article Photo"

**Remplis le formulaire:**

```
Titre:        Mon dessin
Auteur:       Mehdi
Niveau:       CM1
Tags:         art, dessin
Description:  Mon beau dessin!
Photo:        [Choisir un fichier]
Format:       Photo
```

**Clique "Choisir une image" et sélectionne un fichier image**

**Clique "Publier l'article"**

### Étape 3: Vérifier dans Firebase Console

#### Firestore Database

1. Collection **"articles"**
2. Tu devrais voir le nouvel article avec:
   - `photoUrl: "https://..."`

#### Cloud Storage

1. **Storage** (menu à gauche)
2. Dossier **"articles"**

**Tu devrais voir:**

```
articles/
├── mon-dessin-1234567890.jpg
├── ... (autres photos)
```

✅ **Si la photo apparaît = Cloud Storage fonctionne!**

---

## 🔍 Vérifier les Logs Netlify

Si quelque chose ne fonctionne pas:

### Étape 1: Accéder aux Deploy Logs

1. Netlify Dashboard
2. Onglet **"Deployments"**
3. Clique sur le dernier déploiement
4. Clique **"Deploy log"**

### Étape 2: Chercher les erreurs Firebase

```bash
# Cherche ces patterns:
❌ "Firebase configuration is not set"
❌ "Cannot read property 'apiKey'"
❌ "auth/invalid-api-key"
❌ "PERMISSION_DENIED"
```

### Étape 3: Si tu vois une erreur

**Solution:**
1. Va à Netlify Settings → Environment
2. Vérifie que les variables sont présentes
3. Vérifie qu'aucun caractère n'est manquant
4. Redéploie

---

## ⚠️ Erreurs Courantes et Solutions

### ❌ Erreur: "Firebase configuration is not set"

```
⚠️ Cause: Variables d'environnement non trouvées
✅ Solution:
   1. Vérifier que les 6 variables sont présentes sur Netlify
   2. Vérifier les noms (doivent commencer par VITE_)
   3. Vérifier qu'aucun espace inutile
   4. Redéployer
```

### ❌ Erreur: "auth/invalid-api-key"

```
⚠️ Cause: Clé API Firebase incorrecte
✅ Solution:
   1. Copier la bonne clé depuis Firebase Console
   2. La remplacer sur Netlify
   3. Redéployer
```

### ❌ Erreur: "PERMISSION_DENIED"

```
⚠️ Cause: Les règles Firestore/Storage ne permettent pas l'accès
✅ Solution:
   1. Vérifier les règles Firestore (test mode = accès libre)
   2. Vérifier les règles Storage (test mode = accès libre)
   3. Si production mode: ajouter les bonnes règles
```

### ❌ Article publié mais n'apparaît pas dans la galerie

```
⚠️ Cause: L'article n'a pas le statut "published"
✅ Solution:
   1. Vérifier dans Firestore que status = "published"
   2. Ou ajouter status: "published" manuellement dans Firestore
```

### ❌ Photo uploadée mais ne s'affiche pas

```
⚠️ Cause: CORS ou URL incorrecte
✅ Solution:
   1. Vérifier l'URL dans Firestore (doit commencer par https://)
   2. Vérifier les CORS de Cloud Storage
   3. Vérifier les règles d'accès Storage
```

---

## 📱 Test de la Console du Navigateur

Pour vérifier que tout fonctionne vraiment:

### Étape 1: Ouvrir DevTools

```
F12 (Windows/Linux)
Cmd + Option + I (Mac)
```

### Étape 2: Onglet "Console"

### Étape 3: Exécuter des tests

```javascript
// Test 1: Vérifier que Firebase est chargé
firebase
// Doit afficher: Firebase object {...}

// Test 2: Vérifier que la config existe
firebase.initializeApp
// Doit afficher: function initializeApp

// Test 3: Vérifier l'auth
firebase.auth()
// Doit afficher: Auth object {...}

// Test 4: Vérifier Firestore
firebase.firestore()
// Doit afficher: Firestore object {...}
```

**Si tous les tests passent:**
✅ Firebase fonctionne correctement!

---

## ✅ Checklist Complète

```
[ ] Site déployé sur Netlify
[ ] Variables d'environnement ajoutées à Netlify
[ ] Page /login s'affiche correctement
[ ] Compte créé avec succès
[ ] Utilisateur apparaît dans Firebase Authentication
[ ] Article texte publié avec succès
[ ] Article apparaît dans Firestore Database
[ ] Article visible dans la galerie publique /gallery
[ ] Article photo publié avec succès
[ ] Photo uploadée dans Cloud Storage
[ ] Photo s'affiche dans la galerie
[ ] Console du navigateur sans erreurs Firebase
[ ] Logs Netlify sans erreurs
```

---

## 🎉 Succès!

Si tous les tests passent:

**✅ Firebase fonctionne parfaitement avec Netlify!**

Tu peux maintenant:
- 📝 Publier des articles depuis /admin
- 👥 Inviter d'autres enseignants à créer des comptes
- 📸 Uploader des articles avec photos
- 🌍 Partager la galerie avec tes élèves sur /gallery

---

## 📞 Besoin d'Aide?

Si quelque chose ne fonctionne pas:

1. **Vérifie les logs Netlify** (Deployments → Deploy log)
2. **Ouvre la Console du navigateur** (F12)
3. **Consulte SECURITY_ENV.md** pour les détails de configuration
4. **Vérifie Firebase Console** pour les données

Toutes les réponses y sont! 🚀
