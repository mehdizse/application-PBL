import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as renderSlot, e as renderHead, f as addAttribute } from '../astro.474d762c.mjs';
import 'html-escaper';
/* empty css                                                      */
const $$Astro$3 = createAstro("https://your-blog-url.netlify.app");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="bg-white/95 backdrop-blur border-b border-gray-200 fixed top-0 left-0 right-0 z-50 h-14">
  <div class="flex items-center justify-between h-full px-4 max-w-md mx-auto md:max-w-3xl">
    <!-- Logo et titre à gauche -->
    <div class="flex items-center space-x-2">
      <span class="text-lg">📝</span>
      <span class="text-sm font-medium text-gray-900">Mur des Textes</span>
    </div>
    
    <!-- Bouton discret à droite -->
    ${Astro2.url.pathname === "/admin" ? renderTemplate`<a href="/" class="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 border border-gray-200 rounded-md transition-colors">
        Page principale
      </a>` : renderTemplate`<a href="/admin" class="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 border border-gray-200 rounded-md transition-colors">
        Espace enseignant
      </a>`}
  </div>
</header>`;
}, "D:/mon_projet/pbl-writing-blog/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro("https://your-blog-url.netlify.app");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white border-t border-gray-200">
  <div class="max-w-md mx-auto md:max-w-3xl px-4 py-3 text-center">
    <span class="text-xs text-gray-500">© 2026 — Mur des Textes • Chaque mot est une victoire 🌟</span>
  </div>
</footer>`;
}, "D:/mon_projet/pbl-writing-blog/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://your-blog-url.netlify.app");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const title = "\xC9crire & Cr\xE9er";
  const description = "Blog d'apprentissage par projet - D\xE9veloppement, cr\xE9ation et partage de connaissances";
  return renderTemplate(_a || (_a = __template(['<html lang="fr" class="astro-37FXCHFA">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta name="description"', `>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Preload critical CSS -->
    <link rel="preload" href="/styles/globals.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    `, '<noscript><link rel="stylesheet" href="/styles/globals.css"></noscript>\n    \n    <!-- Open Graph / Facebook -->\n    <meta property="og:type" content="website">\n    <meta property="og:url" content="https://votresite.com/">\n    <meta property="og:title"', '>\n    <meta property="og:description"', '>\n    <meta property="og:image" content="/images/og-image.jpg">\n\n    <!-- Twitter -->\n    <meta property="twitter:card" content="summary_large_image">\n    <meta property="twitter:url" content="https://votresite.com/">\n    <meta property="twitter:title"', '>\n    <meta property="twitter:description"', '>\n    <meta property="twitter:image" content="/images/og-image.jpg">\n\n    <!-- Favicon -->\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n    <link rel="alternate icon" href="/favicon.ico">\n    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n    \n    <title>', '</title>\n    \n    <!-- Preload des polices -->\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    \n    \n', '</head>\n<body class="min-h-screen flex flex-col astro-37FXCHFA">\n    ', '\n    <main class="flex-grow astro-37FXCHFA">\n        ', "\n    </main>\n    ", `
    
    <!-- Scripts Firebase et Firestore -->
    <script type="module">
      // Import des modules Firebase ES6
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
      import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
      import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
      
      // Configuration Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyC_63HQwhIcP_Q0o_qlWYJ0cYk67AUWE4w",
        authDomain: "learnpbl-1d49f.firebaseapp.com",
        projectId: "learnpbl-1d49f",
        storageBucket: "learnpbl-1d49f.firebasestorage.app",
        messagingSenderId: "548405502023",
        appId: "1:548405502023:web:ca5e19c0bd56fae6de5162"
      };
      
      // Initialiser Firebase
      try {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);
        
        // Fonctions Firestore
        const getGroupes = async () => {
          const snapshot = await getDocs(collection(db, 'groupes'));
          return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        };
        
        const addGroupe = async (nom) => {
          const docRef = await addDoc(collection(db, 'groupes'), { 
            nom, 
            visible: true, 
            createdAt: new Date() 
          });
          return { id: docRef.id, nom, visible: true };
        };
        
        const updateGroupe = async (id, data) => {
          await updateDoc(doc(db, 'groupes', id), data);
        };
        
        const deleteGroupe = async (id) => {
          await deleteDoc(doc(db, 'groupes', id));
        };
        
        const getTextes = async () => {
          const snapshot = await getDocs(collection(db, 'textes'));
          return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        };
        
        const getTextesVisibles = async () => {
          const q = query(collection(db, 'textes'), where('visible', '==', true));
          const snapshot = await getDocs(q);
          return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        };
        
        const addTexte = async (texte) => {
          const docRef = await addDoc(collection(db, 'textes'), { 
            ...texte, 
            visible: true, 
            createdAt: new Date() 
          });
          return { id: docRef.id, ...texte, visible: true };
        };
        
        const updateTexte = async (id, data) => {
          await updateDoc(doc(db, 'textes', id), data);
        };
        
        const deleteTexte = async (id) => {
          await deleteDoc(doc(db, 'textes', id));
        };
        
        const getTexte = async (id) => {
          const docRef = doc(db, 'textes', id);
          const docSnap = await getDoc(docRef);
          return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
        };
        
        const getDefiActuel = async () => {
          const docRef = doc(db, 'defis', 'actuel');
          const docSnap = await getDoc(docRef);
          return docSnap.exists() ? docSnap.data() : null;
        };
        
        const setDefi = async (texte) => {
          await setDoc(doc(db, 'defis', 'actuel'), { 
            texte, 
            updatedAt: new Date() 
          });
        };
        
        // Rendre les fonctions disponibles globalement
        window.auth = auth;
        window.signInWithEmailAndPassword = (auth, email, password) => {
          return signInWithEmailAndPassword(auth, email, password);
        };
        window.signOut = () => {
          return signOut(auth);
        };
        window.onAuthStateChanged = (auth, callback) => {
          return onAuthStateChanged(auth, callback);
        };
        window.getGroupes = getGroupes;
        window.addGroupe = addGroupe;
        window.updateGroupe = updateGroupe;
        window.deleteGroupe = deleteGroupe;
        window.getTextes = getTextes;
        window.addTexte = addTexte;
        window.updateTexte = updateTexte;
        window.deleteTexte = deleteTexte;
        window.getTexte = getTexte;
        window.getDefiActuel = getDefiActuel;
        window.setDefi = setDefi;
        window.getTextesVisibles = getTextesVisibles;
        
        console.log('\u2705 Firebase initialis\xE9 avec succ\xE8s');
      } catch (error) {
        console.error('\u274C Erreur d\\'initialisation Firebase:', error);
      }
    <\/script>
</body>
</html>`], ['<html lang="fr" class="astro-37FXCHFA">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta name="description"', `>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    
    <!-- Preload critical CSS -->
    <link rel="preload" href="/styles/globals.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    `, '<noscript><link rel="stylesheet" href="/styles/globals.css"></noscript>\n    \n    <!-- Open Graph / Facebook -->\n    <meta property="og:type" content="website">\n    <meta property="og:url" content="https://votresite.com/">\n    <meta property="og:title"', '>\n    <meta property="og:description"', '>\n    <meta property="og:image" content="/images/og-image.jpg">\n\n    <!-- Twitter -->\n    <meta property="twitter:card" content="summary_large_image">\n    <meta property="twitter:url" content="https://votresite.com/">\n    <meta property="twitter:title"', '>\n    <meta property="twitter:description"', '>\n    <meta property="twitter:image" content="/images/og-image.jpg">\n\n    <!-- Favicon -->\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg">\n    <link rel="alternate icon" href="/favicon.ico">\n    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n    \n    <title>', '</title>\n    \n    <!-- Preload des polices -->\n    <link rel="preconnect" href="https://fonts.googleapis.com">\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    \n    \n', '</head>\n<body class="min-h-screen flex flex-col astro-37FXCHFA">\n    ', '\n    <main class="flex-grow astro-37FXCHFA">\n        ', "\n    </main>\n    ", `
    
    <!-- Scripts Firebase et Firestore -->
    <script type="module">
      // Import des modules Firebase ES6
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
      import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
      import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
      
      // Configuration Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyC_63HQwhIcP_Q0o_qlWYJ0cYk67AUWE4w",
        authDomain: "learnpbl-1d49f.firebaseapp.com",
        projectId: "learnpbl-1d49f",
        storageBucket: "learnpbl-1d49f.firebasestorage.app",
        messagingSenderId: "548405502023",
        appId: "1:548405502023:web:ca5e19c0bd56fae6de5162"
      };
      
      // Initialiser Firebase
      try {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);
        
        // Fonctions Firestore
        const getGroupes = async () => {
          const snapshot = await getDocs(collection(db, 'groupes'));
          return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        };
        
        const addGroupe = async (nom) => {
          const docRef = await addDoc(collection(db, 'groupes'), { 
            nom, 
            visible: true, 
            createdAt: new Date() 
          });
          return { id: docRef.id, nom, visible: true };
        };
        
        const updateGroupe = async (id, data) => {
          await updateDoc(doc(db, 'groupes', id), data);
        };
        
        const deleteGroupe = async (id) => {
          await deleteDoc(doc(db, 'groupes', id));
        };
        
        const getTextes = async () => {
          const snapshot = await getDocs(collection(db, 'textes'));
          return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        };
        
        const getTextesVisibles = async () => {
          const q = query(collection(db, 'textes'), where('visible', '==', true));
          const snapshot = await getDocs(q);
          return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        };
        
        const addTexte = async (texte) => {
          const docRef = await addDoc(collection(db, 'textes'), { 
            ...texte, 
            visible: true, 
            createdAt: new Date() 
          });
          return { id: docRef.id, ...texte, visible: true };
        };
        
        const updateTexte = async (id, data) => {
          await updateDoc(doc(db, 'textes', id), data);
        };
        
        const deleteTexte = async (id) => {
          await deleteDoc(doc(db, 'textes', id));
        };
        
        const getTexte = async (id) => {
          const docRef = doc(db, 'textes', id);
          const docSnap = await getDoc(docRef);
          return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
        };
        
        const getDefiActuel = async () => {
          const docRef = doc(db, 'defis', 'actuel');
          const docSnap = await getDoc(docRef);
          return docSnap.exists() ? docSnap.data() : null;
        };
        
        const setDefi = async (texte) => {
          await setDoc(doc(db, 'defis', 'actuel'), { 
            texte, 
            updatedAt: new Date() 
          });
        };
        
        // Rendre les fonctions disponibles globalement
        window.auth = auth;
        window.signInWithEmailAndPassword = (auth, email, password) => {
          return signInWithEmailAndPassword(auth, email, password);
        };
        window.signOut = () => {
          return signOut(auth);
        };
        window.onAuthStateChanged = (auth, callback) => {
          return onAuthStateChanged(auth, callback);
        };
        window.getGroupes = getGroupes;
        window.addGroupe = addGroupe;
        window.updateGroupe = updateGroupe;
        window.deleteGroupe = deleteGroupe;
        window.getTextes = getTextes;
        window.addTexte = addTexte;
        window.updateTexte = updateTexte;
        window.deleteTexte = deleteTexte;
        window.getTexte = getTexte;
        window.getDefiActuel = getDefiActuel;
        window.setDefi = setDefi;
        window.getTextesVisibles = getTextesVisibles;
        
        console.log('\u2705 Firebase initialis\xE9 avec succ\xE8s');
      } catch (error) {
        console.error('\u274C Erreur d\\\\'initialisation Firebase:', error);
      }
    <\/script>
</body>
</html>`])), addAttribute(description, "content"), maybeRenderHead(), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, { "class": "astro-37FXCHFA" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "class": "astro-37FXCHFA" }));
}, "D:/mon_projet/pbl-writing-blog/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro("https://your-blog-url.netlify.app");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  Astro2.params;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="pt-16 min-h-screen bg-gray-50">
    <div class="max-w-md mx-auto px-4 pb-10">
      <!-- Bouton retour -->
      <button onclick="history.back()" class="mb-4 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 hover:text-gray-800 transition-all duration-150">
        <span class="mr-2">←</span>
        Retour aux productions
      </button>

      <!-- Contenu chargé dynamiquement -->
      <div id="texteContainer" class="space-y-4">
        <div class="text-center py-12">
          <div class="text-4xl mb-4 text-gray-400 opacity-70">📚</div>
          <p class="text-gray-600 font-medium">Chargement du texte...</p>
        </div>
      </div>
    </div>
  </div>
` })}`;
}, "D:/mon_projet/pbl-writing-blog/src/pages/texte/[id].astro", void 0);

const $$file = "D:/mon_projet/pbl-writing-blog/src/pages/texte/[id].astro";
const $$url = "/texte/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, _id_ as _ };
