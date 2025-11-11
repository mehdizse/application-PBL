# 🔐 SÉCURITÉ - Variables d'Environnement

## ⚠️ Problème de Sécurité Résolu!

Votre projet est **PUBLIC sur GitHub**, donc les credentials Firebase ne doivent JAMAIS être commitées!

### ✅ Solution Implémentée:

**Variables d'environnement + `.env.local` (non commité)**

---

## 📁 Fichiers de Configuration

### 1. `.env.example` ✅ (COMMITTÉ sur GitHub)

```bash
# Ce fichier EST committé - c'est un template
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
# etc...
```

**Utilité:** Montre la structure requise aux autres développeurs

### 2. `.env.local` 🔐 (NON COMMITTÉ)

```bash
# Ce fichier N'est PAS committé - vos vraies credentials
VITE_FIREBASE_API_KEY=AIzaSyD12345abcdef...
VITE_FIREBASE_AUTH_DOMAIN=pbl-blog-12345.firebaseapp.com
# etc...
```

**Utilité:** Contient VOS vraies credentials (restent locales)

---

## 🚀 Configuration (3 Étapes)

### Étape 1: Copier le fichier exemple

```bash
# Sur Windows:
copy .env.example .env.local

# Sur Mac/Linux:
cp .env.example .env.local
```

### Étape 2: Remplir `.env.local`

1. Allez sur [Firebase Console](https://console.firebase.google.com)
2. Sélectionnez votre projet
3. Allez à **Paramètres du Projet** (roue engrenage)
4. Cliquez **"Vos apps"**
5. Copiez votre configuration Firebase
6. Collez les valeurs dans `.env.local`:

```bash
VITE_FIREBASE_API_KEY=AIzaSyD12345...
VITE_FIREBASE_AUTH_DOMAIN=pbl-blog-12345.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=pbl-blog-12345
VITE_FIREBASE_STORAGE_BUCKET=pbl-blog-12345.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abc123def456
```

### Étape 3: Vérifier que `.env.local` est dans `.gitignore`

```bash
# Le fichier .gitignore DÉJÀ inclut:
.env
.env.local
.env.*.local
```

✅ Automatiquement **pas commité à GitHub**

---

## 🔍 Vérification Sécurité

### Vérifier que `.env.local` est ignoré:

```bash
git status
```

**Résultat attendu:**
```
On branch main
nothing to commit, working tree clean
```

⚠️ `.env.local` ne doit PAS apparaître!

### Vérifier que le projet utilise les env vars:

**Code dans `src/lib/firebase.js`:**
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,  // ← Depuis .env.local
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // etc...
};
```

✅ Les credentials sont chargées depuis variables d'environnement

---

## 🛡️ Règles de Sécurité

### ✅ À FAIRE:

- [x] Créer `.env.local` avec vos credentials
- [x] NE PAS commiter `.env.local`
- [x] Utiliser `.env.example` comme template
- [x] Vérifier que `.gitignore` ignore `.env.local`

### ❌ À NE PAS FAIRE:

- ❌ Coller vos credentials dans `firebase.js` directement
- ❌ Commiter `.env.local` sur GitHub
- ❌ Partager `.env.local` publiquement
- ❌ Mettre les credentials dans le code source

---

## 🚀 Pour Netlify/Déploiement

Lors du déploiement sur **Netlify**, vous devez ajouter les variables d'environnement:

### 1. Allez sur Netlify Dashboard
### 2. Site → Settings → Build & Deploy → Environment
### 3. Ajoutez les variables:

```
VITE_FIREBASE_API_KEY = AIzaSyD...
VITE_FIREBASE_AUTH_DOMAIN = pbl-blog-12345.firebaseapp.com
VITE_FIREBASE_PROJECT_ID = pbl-blog-12345
VITE_FIREBASE_STORAGE_BUCKET = pbl-blog-12345.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID = 123456789012
VITE_FIREBASE_APP_ID = 1:123456789012:web:abc123
```

✅ Netlify utilisera ces variables pour le build

---

## 📊 Résumé Architecture

```
Code Source (GitHub - Public)
├── src/lib/firebase.js → utilise import.meta.env.VITE_*
├── .gitignore → ignore .env.local ✅
└── .env.example → template publique

Local Development (Votre ordinateur)
├── .env.local → VOS credentials (pas sur GitHub) ✅
├── Astro dev → Lit .env.local
└── Fonctionne parfaitement

Déploiement (Netlify)
├── Récupère code de GitHub
├── Lit variables d'environnement depuis Netlify
├── Build avec les vraies credentials
└── Site fonctionne avec Firebase
```

---

## ✅ Vérification Finale

### Démarrer le dev local:

```bash
npm run dev
```

**Attendu:**
- ✅ Console: `[build] Completed in Xms`
- ❌ Console: Message d'erreur Firebase

### Tester la connexion:

1. Allez à `http://localhost:3000/login`
2. Essayez de créer un compte
3. Vérifiez dans Firebase Console que l'utilisateur apparaît

**Si ça marche:**
✅ Variables d'environnement sont correctement configurées!

---

## 🔒 Bonnes Pratiques Supplémentaires

### 1. Ne JAMAIS logger les credentials:

```javascript
// ❌ MAUVAIS:
console.log(import.meta.env.VITE_FIREBASE_API_KEY);

// ✅ BON:
console.log('Firebase initialized'); // Pas les credentials!
```

### 2. Utiliser les Règles de Sécurité Firebase:

```javascript
// Firestore Rules:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /articles/{document=**} {
      allow read: if resource.data.status == 'published';
      allow write: if request.auth != null;
    }
  }
}
```

### 3. Activer Cloud Storage Rules:

```javascript
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### 4. Regénérer les Keys si compromises:

Si jamais une clé publique est exposée:
1. Allez à Firebase Console
2. Settings → Service Accounts
3. Régénérez la clé
4. Mettez à jour `.env.local`

---

## 📞 Troubleshooting

### "❌ Erreur: Firebase configuration is not set"

**Cause:** `.env.local` vide ou non trouvé

**Solution:**
1. Créez `.env.local`
2. Copiez `.env.example`
3. Remplissez les valeurs Firebase

### "❌ Cannot find env variable"

**Cause:** Variables mal nommées

**Solution:** Assurez-vous que les noms commencent par `VITE_`:
```bash
# ✅ Correct:
VITE_FIREBASE_API_KEY=...

# ❌ Incorrect:
FIREBASE_API_KEY=...
```

### "❌ Les articles ne s'affichent pas après déploiement"

**Cause:** Variables d'environnement non configurées sur Netlify

**Solution:**
1. Allez sur Netlify Dashboard
2. Vérifiez Environment variables
3. Redéployez après les avoir ajoutées

---

## ✅ Checklist Sécurité

```
Setup Local:
[ ] .env.local créé
[ ] Credentials Firebase dans .env.local
[ ] .gitignore inclut .env.local
[ ] npm run dev fonctionne

Avant Commit:
[ ] .env.local dans .gitignore
[ ] .env.local n'apparaît pas dans `git status`
[ ] Seul .env.example est committé

Déploiement:
[ ] Variables d'env ajoutées sur Netlify
[ ] Build redéployé
[ ] Site fonctionne correctement
```

---

**Votre projet est maintenant SÉCURISÉ! 🔐**

Les credentials Firebase sont protégés et le code source reste public.
