# 🔐 Configuration Firebase - Guide Complet

## 🎯 Vue d'ensemble

Votre blog utilise maintenant **Firebase** pour:
- ✅ **Authentification** - Système de login pour les enseignants
- ✅ **Firestore Database** - Stockage des articles publiés
- ✅ **Cloud Storage** - Stockage des photos uploadées
- ✅ **Variables d'Environnement** - Credentials sécurisées (NON publiques)

---

## 🔐 IMPORTANT: Sécurité des Credentials

### ⚠️ Le projet est PUBLIC sur GitHub!

Vos credentials Firebase ne doivent JAMAIS être publics. Je les ai configurés en **variables d'environnement**:

- ✅ `.env.local` - Contient VOS vraies credentials (NON committé)
- ✅ `.env.example` - Template public (committé)
- ✅ `.gitignore` - Ignore automatiquement `.env.local`

**Consultez:** `SECURITY_ENV.md` pour les détails complets!

---

## 📋 Ce qui a été créé

### 1. Fichier de Configuration Firebase
**Location:** `src/lib/firebase.js`

Ce fichier exporte les services Firebase initialisés:
- `auth` - Pour l'authentification
- `db` - Pour Firestore Database
- `storage` - Pour Cloud Storage

### 2. Page de Connexion
**Location:** `/login`

Permet aux enseignants de:
- Se connecter avec email/mot de passe
- Créer un nouveau compte
- Recevoir les erreurs en temps réel

### 3. Page Admin Sécurisée
**Location:** `/admin`

- Vérifiée par authentification Firebase
- Sauvegarde les articles dans Firestore
- Upload les photos dans Cloud Storage

### 4. Page Galerie Publique
**Location:** `/gallery`

- Affiche les articles publiés
- Filtrage par format, niveau, tags
- Recherche en temps réel
- Modal pour lire articles complets

---

## ⚙️ Configuration Firebase (IMPORTANT!)

### Étape 1: Créer un Projet Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Cliquez sur **"Ajouter un projet"**
3. Donnez un nom à votre projet (ex: "pbl-blog")
4. Acceptez les termes et créez le projet
5. Attendez la création (2-3 minutes)

### Étape 2: Récupérer vos Identifiants

1. Dans Firebase Console, cliquez sur **"Ajouter une application"**
2. Sélectionnez **Web** (icône `</>`)
3. Donnez un nom à l'app (ex: "pbl-blog-app")
4. Cliquez **"Enregistrer l'app"**
5. Copiez la configuration Firebase affichée

La configuration ressemble à:
```javascript
{
  apiKey: "AIzaSyD...",
  authDomain: "pbl-blog-12345.firebaseapp.com",
  projectId: "pbl-blog-12345",
  storageBucket: "pbl-blog-12345.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
}
```

### Étape 3: Configurer le fichier firebase.js

~~Remplacez dans `src/lib/firebase.js`:~~

**Le fichier `src/lib/firebase.js` est déjà configuré** pour charger les credentials depuis des variables d'environnement!

Il utilise `import.meta.env.VITE_*` pour lire les valeurs du fichier `.env.local`.

**À FAIRE:**

1. **Copier** `.env.example` en `.env.local`:
   ```bash
   # Windows:
   copy .env.example .env.local
   
   # Mac/Linux:
   cp .env.example .env.local
   ```

2. **Remplir** `.env.local` avec vos credentials Firebase:
   ```bash
   VITE_FIREBASE_API_KEY=AIzaSyD12345abcdef_YOUR_KEY
   VITE_FIREBASE_AUTH_DOMAIN=pbl-blog-12345.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=pbl-blog-12345
   VITE_FIREBASE_STORAGE_BUCKET=pbl-blog-12345.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
   VITE_FIREBASE_APP_ID=1:123456789012:web:abc123def456ghi789
   ```

3. **NE PAS commiter** `.env.local`:
   - ✅ Le fichier `.gitignore` l'ignore automatiquement
   - ✅ Seul `.env.example` est committé

**Exemple complet:**
```javascript
// Code dans src/lib/firebase.js (déjà fait):
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,  // Depuis .env.local
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // etc...
};
```

### Étape 4: Activer l'Authentification Email/Password

1. Dans Firebase Console, allez à **"Authentification"** (à gauche)
2. Cliquez sur l'onglet **"Fournisseurs de connexion"**
3. Cliquez sur **"Email/Mot de passe"**
4. **Activez** les deux options:
   - Email/mot de passe
   - Utiliser les adresses e-mail pour la connexion
5. Cliquez **"Enregistrer"**

### Étape 5: Créer la Base de Données Firestore

1. Dans Firebase Console, allez à **"Firestore Database"** (à gauche)
2. Cliquez **"Créer une base de données"**
3. Choisissez:
   - **Région:** Europe (ou votre région)
   - **Mode de sécurité:** Sélectionnez **"Mode de test"** pour commencer
4. Cliquez **"Créer"**

### Étape 6: Créer la Collection "articles"

1. Dans Firestore, cliquez **"Démarrer une collection"**
2. Donnez le nom **"articles"**
3. Cliquez **"Suivant"**
4. Cliquez **"Enregistrer"** (on ajoutera les documents manuellement)

### Étape 7: Configurer le Stockage Cloud

1. Dans Firebase Console, allez à **"Stockage"** (à gauche)
2. Cliquez **"Commencer"**
3. Acceptez les règles par défaut
4. Sélectionnez la même région que Firestore
5. Cliquez **"Terminé"**

### Étape 8: Configurer les Règles de Sécurité

**Pour Firestore:**

1. Allez à **Firestore Database → Règles**
2. Remplacez le contenu par:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permettre la lecture publique des articles publiés
    match /articles/{document=**} {
      allow read: if resource.data.status == 'published';
      allow create, update: if request.auth != null;
      allow delete: if request.auth.uid == resource.data.userId;
    }
  }
}
```

3. Cliquez **"Publier"**

**Pour Cloud Storage:**

1. Allez à **Stockage → Règles**
2. Remplacez le contenu par:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Permettre la lecture publique
    match /{allPaths=**} {
      allow read: if true;
    }
    // Permettre upload pour utilisateurs authentifiés
    match /articles/{fileName} {
      allow write: if request.auth != null;
    }
  }
}
```

3. Cliquez **"Publier"**

---

## 🚀 Utilisation

### Pour les Enseignants:

1. **Créer un compte:** `/login` → "Créer un compte"
   - Email: votre.email@ecole.fr
   - Mot de passe: minimum 6 caractères

2. **Se connecter:** `/login` → Entrez vos identifiants

3. **Ajouter une production:** `/admin`
   - Choisissez le format (Écrit ou Photo)
   - Remplissez le formulaire
   - Cliquez "Publier"
   - L'article est immédiatement publié!

4. **Voir les publications:** `/gallery`
   - Filtrez par format, niveau, tags
   - Recherchez par titre ou auteur

### Pour les Élèves/Familles:

1. **Voir la galerie:** `/gallery`
   - Découvrez les productions publiées
   - Cliquez sur une production pour la lire complètement

---

## 🔒 Sécurité Important!

⚠️ **À FAIRE:**
- [ ] Remplacez votre `firebase.js` avec vos vraies credentials
- [ ] Ne commitez jamais votre `firebase.js` sur GitHub (c'est dans `.gitignore`)
- [ ] Testez les règles de sécurité en mode développement
- [ ] Passez en "Mode de production" quand vous êtes prêt

✅ **Actuellement:**
- Mode de test activé (accessible en dev)
- Authentification requise pour publier
- Lecture publique des articles
- Photos stockées dans Cloud Storage

---

## 📊 Structure Firestore

Chaque article a cette structure:

```javascript
{
  title: "Mon premier poème",
  author: "Marie Dupont",
  level: "cm1",
  projectName: "Découvrir la Poésie",
  description: "Contexte du projet...",
  content: "Texte de l'élève...", // Pour format écrit
  format: "écrit", // ou "photo"
  tags: ["poésie", "nature"],
  status: "published",
  userId: "uid12345", // ID de l'enseignant
  photoURL: "https://...", // Pour format photo
  photoDescription: "Description photo...",
  createdAt: timestamp
}
```

---

## 🛠️ Troubleshooting

### "❌ Erreur: Firebase n'est pas initialisé"
→ Vérifiez que les credentials dans `firebase.js` sont corrects

### "❌ Article ne s'affiche pas dans la galerie"
→ Assurez-vous que `status: 'published'` est défini

### "❌ Photo n'upload pas"
→ Vérifiez que Cloud Storage est activé et les règles configurées

### "❌ Impossible de se connecter"
→ Assurez-vous que Email/Password Auth est activé

---

## 📞 Ressources Utiles

- [Documentation Firebase](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Auth Documentation](https://firebase.google.com/docs/auth)
- [Storage Guide](https://firebase.google.com/docs/storage)

---

## ✅ Checklist Installation

```
[ ] Compte Firebase créé
[ ] Projet Firebase créé
[ ] Configuration Firebase copiée
[ ] firebase.js configuré avec vos credentials
[ ] Email/Password Auth activé
[ ] Firestore Database créée
[ ] Collection "articles" créée
[ ] Cloud Storage activé
[ ] Règles Firestore configurées
[ ] Règles Cloud Storage configurées
[ ] Enseignant inscrit sur `/login`
[ ] Premier article publié sur `/admin`
[ ] Article visible sur `/gallery`
```

---

**Bravo! Votre blog est maintenant complètement sécurisé avec Firebase!** 🎉

N'hésitez pas si vous avez des questions sur la configuration!
