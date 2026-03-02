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
      import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, setDoc, getDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
      
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
        
        let textesWeekMigrationPromise = null;

        const getTextes = async () => {
          await ensureTextesWeekIds();
          const snapshot = await getDocs(collection(db, 'textes'));
          return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        };
        
        const getTextesVisibles = async () => {
          await ensureTextesWeekIds();
          const q = query(collection(db, 'textes'), where('visible', '==', true));
          const snapshot = await getDocs(q);
          return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        };
        
        const addTexte = async (texte) => {
          const createdAt = new Date();
          const weeklyData = await getWeeklyExpressionsData();
          const fallbackWeek = getIsoWeekInfo(createdAt);
          const currentWeekId = String(weeklyData?.currentWeek?.weekId || fallbackWeek.weekId).trim();
          const docRef = await addDoc(collection(db, 'textes'), { 
            ...texte, 
            visible: true,
            weekId: currentWeekId,
            createdAt
          });
          return { id: docRef.id, ...texte, visible: true, weekId: currentWeekId, createdAt };
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
        
        const WEEKLY_COLLECTION = 'weeklyExpressions';
        const WEEKLY_META_DOC = { collection: 'weeklyExpressionsMeta', id: 'current' };
        const LEGACY_DEFI_DOC = { collection: 'defis', id: 'actuel' };

        const pad2 = (value) => String(value).padStart(2, '0');

        const getIsoWeekInfo = (date = new Date()) => {
          const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
          const dayNum = d.getUTCDay() || 7;
          d.setUTCDate(d.getUTCDate() + 4 - dayNum);
          const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
          const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
          const year = d.getUTCFullYear();

          const monday = new Date(d);
          monday.setUTCDate(d.getUTCDate() - ((d.getUTCDay() || 7) - 1));
          const sunday = new Date(monday);
          sunday.setUTCDate(monday.getUTCDate() + 6);

          const toDateOnly = (rawDate) => {
            const y = rawDate.getUTCFullYear();
            const m = pad2(rawDate.getUTCMonth() + 1);
            const day = pad2(rawDate.getUTCDate());
            return \`\${y}-\${m}-\${day}\`;
          };

          return {
            weekId: \`\${year}-\${pad2(weekNo)}\`,
            startDate: toDateOnly(monday),
            endDate: toDateOnly(sunday)
          };
        };

        const getPreviousWeekDate = (date = new Date()) => {
          const prev = new Date(date);
          prev.setDate(prev.getDate() - 7);
          return prev;
        };

        const normalizeExpressions = (value) => {
          if (!Array.isArray(value)) return [];
          return value
            .map((entry) => String(entry ?? '').trim())
            .filter((entry) => entry.length > 0);
        };

        const parseLegacyTextToExpressions = (text) => {
          const safeText = String(text ?? '').trim();
          if (!safeText) return [];
          return safeText
            .split('\\n')
            .map((line) => line.replace(/^[-*]\\s*/, '').trim())
            .filter((line) => line.length > 0);
        };

        const toJsDate = (value) => {
          if (!value) return null;
          if (typeof value?.toDate === 'function') return value.toDate();
          if (value instanceof Date) return value;
          const parsed = new Date(value);
          return Number.isNaN(parsed.getTime()) ? null : parsed;
        };

        const extractLegacyReferenceDate = (legacyData) => {
          const fromUpdatedAt = toJsDate(legacyData?.updatedAt);
          if (fromUpdatedAt) return fromUpdatedAt;
          const fromCreatedAt = toJsDate(legacyData?.createdAt);
          if (fromCreatedAt) return fromCreatedAt;
          return new Date();
        };

        const WEEK_ID_REGEX = /^\\d{4}-\\d{2}$/;
        const DATE_REGEX = /^\\d{4}-\\d{2}-\\d{2}$/;
        const DATE_FR_REGEX = /^\\d{2}\\/\\d{2}\\/\\d{4}$/;

        const toUtcDate = (year, month, day) => {
          const date = new Date(Date.UTC(year, month - 1, day));
          if (
            date.getUTCFullYear() !== year ||
            date.getUTCMonth() !== month - 1 ||
            date.getUTCDate() !== day
          ) {
            return null;
          }
          return date;
        };

        const parseFlexibleDate = (value) => {
          if (!value) return null;

          if (typeof value?.toDate === 'function') {
            const date = value.toDate();
            return toUtcDate(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
          }

          if (value instanceof Date) {
            return toUtcDate(value.getUTCFullYear(), value.getUTCMonth() + 1, value.getUTCDate());
          }

          const raw = String(value).trim();
          if (!raw) return null;

          if (DATE_REGEX.test(raw)) {
            const [year, month, day] = raw.split('-').map(Number);
            return toUtcDate(year, month, day);
          }

          if (DATE_FR_REGEX.test(raw)) {
            const [day, month, year] = raw.split('/').map(Number);
            return toUtcDate(year, month, day);
          }

          return null;
        };

        const parseIsoDateStrict = (value) => {
          if (typeof value !== 'string') return null;
          const raw = value.trim();
          if (!DATE_REGEX.test(raw)) return null;
          const [year, month, day] = raw.split('-').map(Number);
          return toUtcDate(year, month, day);
        };

        const ensureTextesWeekIds = async () => {
          if (textesWeekMigrationPromise) return textesWeekMigrationPromise;

          textesWeekMigrationPromise = (async () => {
            const snapshot = await getDocs(collection(db, 'textes'));
            const updates = [];

            snapshot.docs.forEach((texteDoc) => {
              const data = texteDoc.data();
              const existingWeekId = String(data?.weekId || '').trim();
              if (WEEK_ID_REGEX.test(existingWeekId)) return;

              const createdAtDate = toJsDate(data?.createdAt) || new Date();
              const weekInfo = getIsoWeekInfo(createdAtDate);
              updates.push(
                setDoc(
                  doc(db, 'textes', texteDoc.id),
                  {
                    weekId: weekInfo.weekId,
                    updatedAt: new Date()
                  },
                  { merge: true }
                )
              );
            });

            if (updates.length > 0) {
              await Promise.all(updates);
            }
          })();

          try {
            await textesWeekMigrationPromise;
          } finally {
            textesWeekMigrationPromise = null;
          }
        };

        const toIsoDate = (date) => {
          const y = date.getUTCFullYear();
          const m = pad2(date.getUTCMonth() + 1);
          const d = pad2(date.getUTCDate());
          return \`\${y}-\${m}-\${d}\`;
        };

        const isWithinRangeInclusive = (candidateDate, startDate, endDate) => {
          const c = candidateDate.getTime();
          return c >= startDate.getTime() && c <= endDate.getTime();
        };

        const toWeekRecord = (rawData, fallbackWeekInfo) => {
          if (!rawData || typeof rawData !== 'object') return null;
          const weekId = String(rawData.weekId || fallbackWeekInfo.weekId || '').trim();
          const parsedStartDate = parseFlexibleDate(rawData.startDate || rawData.dateDebut || fallbackWeekInfo.startDate);
          const parsedEndDate = parseFlexibleDate(rawData.endDate || rawData.dateFin || fallbackWeekInfo.endDate);
          const expressions = normalizeExpressions(rawData.expressions);

          if (
            !weekId ||
            !parsedStartDate ||
            !parsedEndDate ||
            expressions.length === 0 ||
            !WEEK_ID_REGEX.test(weekId)
          ) {
            return null;
          }

          const startTime = parsedStartDate.getTime();
          const endTime = parsedEndDate.getTime();
          if (endTime < startTime) return null;

          return {
            weekId,
            startDate: toIsoDate(parsedStartDate),
            endDate: toIsoDate(parsedEndDate),
            expressions,
            _startTime: startTime,
            _endTime: endTime
          };
        };

        const sortWeeksDesc = (weeks) => {
          return [...weeks].sort((a, b) => {
            if (b._endTime !== a._endTime) return b._endTime - a._endTime;
            if (b._startTime !== a._startTime) return b._startTime - a._startTime;
            return b.weekId.localeCompare(a.weekId);
          });
        };

        const buildSeedWeeks = () => {
          const current = getIsoWeekInfo(new Date());
          const previous = getIsoWeekInfo(getPreviousWeekDate(new Date()));
          return sortWeeksDesc([
            {
              ...current,
              expressions: [
                'Utilise au moins 3 connecteurs logiques.',
                'Ajoute une phrase de conclusion forte.',
                'Varie la longueur de tes phrases.'
              ]
            },
            {
              ...previous,
              expressions: [
                'Commence ton texte par une accroche.',
                'D\xE9cris une \xE9motion avec au moins 2 adjectifs.',
                'Relis et corrige les accords.'
              ]
            }
          ]);
        };

        const saveWeeks = async (weeks) => {
          await Promise.all(
            weeks.map((week) =>
              setDoc(doc(db, WEEKLY_COLLECTION, week.weekId), {
                weekId: week.weekId,
                startDate: week.startDate,
                endDate: week.endDate,
                expressions: week.expressions,
                updatedAt: new Date()
              }, { merge: true })
            )
          );
        };

        const getWeeklyExpressionsData = async () => {
          const fallbackWeek = getIsoWeekInfo(new Date());
          let weeklyDocs = await getDocs(collection(db, WEEKLY_COLLECTION));
          let weeks = sortWeeksDesc(
            weeklyDocs.docs
              .map((weekDoc) => toWeekRecord(weekDoc.data(), fallbackWeek))
              .filter(Boolean)
          );

          if (weeks.length === 0) {
            const legacyDocRef = doc(db, LEGACY_DEFI_DOC.collection, LEGACY_DEFI_DOC.id);
            const legacySnap = await getDoc(legacyDocRef);

            if (legacySnap.exists() && legacySnap.data()?.texte) {
              const legacyData = legacySnap.data();
              const legacyReferenceDate = extractLegacyReferenceDate(legacyData);
              const legacyWeekInfo = getIsoWeekInfo(legacyReferenceDate);
              const legacyExpressions = parseLegacyTextToExpressions(legacyData.texte);
              const migratedWeek = {
                ...legacyWeekInfo,
                expressions: legacyExpressions.length > 0 ? legacyExpressions : ['Compl\xE8te cette semaine avec tes premi\xE8res expressions.']
              };

              await setDoc(doc(db, WEEKLY_COLLECTION, migratedWeek.weekId), {
                ...migratedWeek,
                migratedFromLegacy: true,
                migratedAt: new Date(),
                updatedAt: new Date()
              });

              weeks = [migratedWeek];
            } else {
              weeks = buildSeedWeeks();
              await saveWeeks(weeks);
            }
          }

          weeks = sortWeeksDesc(weeks);
          const metaRef = doc(db, WEEKLY_META_DOC.collection, WEEKLY_META_DOC.id);
          const metaSnap = await getDoc(metaRef);
          const metaWeekId = metaSnap.exists()
            ? String(metaSnap.data()?.currentWeekId || '').trim()
            : '';

          const today = new Date();
          const todayUtc = toUtcDate(today.getUTCFullYear(), today.getUTCMonth() + 1, today.getUTCDate());

          const currentWeekByMeta = metaWeekId
            ? weeks.find((week) => week.weekId === metaWeekId)
            : null;
          const currentWeekByDate = weeks.find((week) =>
            isWithinRangeInclusive(todayUtc, new Date(week._startTime), new Date(week._endTime))
          );

          let currentWeek = currentWeekByMeta || currentWeekByDate || weeks[0];
          let selectionMode = (currentWeekByMeta || currentWeekByDate) ? 'current' : 'latest_published';

          if (!currentWeek) {
            currentWeek = {
              ...fallbackWeek,
              expressions: ['Ajoute les expressions de la semaine.'],
              _startTime: parseFlexibleDate(fallbackWeek.startDate).getTime(),
              _endTime: parseFlexibleDate(fallbackWeek.endDate).getTime()
            };
            weeks = [currentWeek];
            await saveWeeks(weeks);
            selectionMode = 'current';
          }

          if (selectionMode === 'current' && metaWeekId !== currentWeek.weekId) {
            await setDoc(metaRef, {
              currentWeekId: currentWeek.weekId,
              updatedAt: new Date()
            }, { merge: true });
          }

          return {
            currentWeekId: currentWeek.weekId,
            currentWeek,
            weeks,
            archives: weeks.filter((week) => week.weekId !== currentWeek.weekId),
            selectionMode,
            isCurrentWeek: selectionMode === 'current'
          };
        };

        const setWeeklyExpressionsForWeek = async ({ weekId, startDate, endDate, expressions }) => {
          const defaultWeek = getIsoWeekInfo(new Date());
          const cleanWeekId = String(weekId || defaultWeek.weekId).trim();
          const startDateInput = String(startDate || defaultWeek.startDate).trim();
          const endDateInput = String(endDate || defaultWeek.endDate).trim();
          const startDateObj = parseIsoDateStrict(startDateInput);
          const endDateObj = parseIsoDateStrict(endDateInput);
          const cleanStartDate = startDateObj ? toIsoDate(startDateObj) : '';
          const cleanEndDate = endDateObj ? toIsoDate(endDateObj) : '';
          const cleanExpressions = normalizeExpressions(expressions);

          if (!cleanWeekId) throw new Error('weekId manquant');
          if (cleanExpressions.length === 0) throw new Error('Aucune expression fournie');
          if (!WEEK_ID_REGEX.test(cleanWeekId)) throw new Error('Format weekId invalide (attendu YYYY-WW)');
          if (!startDateObj || !endDateObj) throw new Error('Format de date invalide (attendu YYYY-MM-DD)');
          if (endDateObj.getTime() < startDateObj.getTime()) throw new Error('La date de fin doit etre apres la date de debut');

          const weekRef = doc(db, WEEKLY_COLLECTION, cleanWeekId);
          const existingSnap = await getDoc(weekRef);
          const createdAt = existingSnap.exists() ? existingSnap.data().createdAt || new Date() : new Date();

          await setDoc(weekRef, {
            weekId: cleanWeekId,
            startDate: cleanStartDate,
            endDate: cleanEndDate,
            dateDebut: cleanStartDate,
            dateFin: cleanEndDate,
            expressions: cleanExpressions,
            createdAt,
            updatedAt: new Date()
          }, { merge: true });

          await setDoc(doc(db, WEEKLY_META_DOC.collection, WEEKLY_META_DOC.id), {
            currentWeekId: cleanWeekId,
            updatedAt: new Date()
          }, { merge: true });

          return {
            weekId: cleanWeekId,
            startDate: cleanStartDate,
            endDate: cleanEndDate,
            expressions: cleanExpressions
          };
        };

        const repairLegacyMigrationWeeks = async () => {
          const legacyDocRef = doc(db, LEGACY_DEFI_DOC.collection, LEGACY_DEFI_DOC.id);
          const legacySnap = await getDoc(legacyDocRef);

          if (!legacySnap.exists() || !legacySnap.data()?.texte) {
            return { repaired: false, reason: 'legacy_missing' };
          }

          const legacyData = legacySnap.data();
          const legacyReferenceDate = extractLegacyReferenceDate(legacyData);
          const expectedWeekInfo = getIsoWeekInfo(legacyReferenceDate);
          const expectedWeekId = expectedWeekInfo.weekId;
          const expectedExpressions = parseLegacyTextToExpressions(legacyData.texte);

          const migratedQuery = query(collection(db, WEEKLY_COLLECTION), where('migratedFromLegacy', '==', true));
          const migratedSnapshot = await getDocs(migratedQuery);
          if (migratedSnapshot.empty) {
            return { repaired: false, reason: 'no_migrated_docs' };
          }

          const migratedDocs = migratedSnapshot.docs.map((item) => ({ id: item.id, data: item.data() }));
          const expectedDoc = migratedDocs.find((item) => item.id === expectedWeekId);
          const mismatchedDocs = migratedDocs.filter((item) => {
            return (
              item.id !== expectedWeekId ||
              item.data.startDate !== expectedWeekInfo.startDate ||
              item.data.endDate !== expectedWeekInfo.endDate
            );
          });

          if (!expectedDoc || mismatchedDocs.length > 0) {
            const expressionsFromExisting = expectedDoc?.data?.expressions;
            const normalizedExpressions = normalizeExpressions(expressionsFromExisting ?? expectedExpressions);
            await setDoc(doc(db, WEEKLY_COLLECTION, expectedWeekId), {
              weekId: expectedWeekId,
              startDate: expectedWeekInfo.startDate,
              endDate: expectedWeekInfo.endDate,
              dateDebut: expectedWeekInfo.startDate,
              dateFin: expectedWeekInfo.endDate,
              expressions: normalizedExpressions.length > 0 ? normalizedExpressions : ['Ajoute les expressions de la semaine.'],
              migratedFromLegacy: true,
              migratedAt: new Date(),
              legacyReferenceDate: expectedWeekInfo.startDate,
              updatedAt: new Date()
            }, { merge: true });

            await Promise.all(
              mismatchedDocs
                .filter((item) => item.id !== expectedWeekId)
                .map((item) => deleteDoc(doc(db, WEEKLY_COLLECTION, item.id)))
            );
          }

          const weeklyData = await getWeeklyExpressionsData();
          const metaRef = doc(db, WEEKLY_META_DOC.collection, WEEKLY_META_DOC.id);
          if (weeklyData.isCurrentWeek) {
            await setDoc(metaRef, {
              currentWeekId: weeklyData.currentWeekId,
              updatedAt: new Date()
            }, { merge: true });
          } else {
            await setDoc(metaRef, {
              currentWeekId: deleteField(),
              updatedAt: new Date()
            }, { merge: true });
          }

          return {
            repaired: true,
            expectedWeekId,
            selectionMode: weeklyData.selectionMode
          };
        };

        const getDefiActuel = async () => {
          const data = await getWeeklyExpressionsData();
          if (!data?.currentWeek) return null;
          return {
            weekId: data.currentWeek.weekId,
            startDate: data.currentWeek.startDate,
            endDate: data.currentWeek.endDate,
            expressions: data.currentWeek.expressions,
            texte: data.currentWeek.expressions.join('\\n')
          };
        };
        
        const setDefi = async (texte) => {
          const defaultWeek = getIsoWeekInfo(new Date());
          const expressions = parseLegacyTextToExpressions(texte);
          await setWeeklyExpressionsForWeek({
            ...defaultWeek,
            expressions
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
        window.getIsoWeekInfo = getIsoWeekInfo;
        window.getWeeklyExpressionsData = getWeeklyExpressionsData;
        window.setWeeklyExpressionsForWeek = setWeeklyExpressionsForWeek;
        window.repairLegacyMigrationWeeks = repairLegacyMigrationWeeks;
        window.migrateTextesWeekIds = ensureTextesWeekIds;
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
      import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, where, setDoc, getDoc, deleteField } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
      
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
        
        let textesWeekMigrationPromise = null;

        const getTextes = async () => {
          await ensureTextesWeekIds();
          const snapshot = await getDocs(collection(db, 'textes'));
          return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        };
        
        const getTextesVisibles = async () => {
          await ensureTextesWeekIds();
          const q = query(collection(db, 'textes'), where('visible', '==', true));
          const snapshot = await getDocs(q);
          return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        };
        
        const addTexte = async (texte) => {
          const createdAt = new Date();
          const weeklyData = await getWeeklyExpressionsData();
          const fallbackWeek = getIsoWeekInfo(createdAt);
          const currentWeekId = String(weeklyData?.currentWeek?.weekId || fallbackWeek.weekId).trim();
          const docRef = await addDoc(collection(db, 'textes'), { 
            ...texte, 
            visible: true,
            weekId: currentWeekId,
            createdAt
          });
          return { id: docRef.id, ...texte, visible: true, weekId: currentWeekId, createdAt };
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
        
        const WEEKLY_COLLECTION = 'weeklyExpressions';
        const WEEKLY_META_DOC = { collection: 'weeklyExpressionsMeta', id: 'current' };
        const LEGACY_DEFI_DOC = { collection: 'defis', id: 'actuel' };

        const pad2 = (value) => String(value).padStart(2, '0');

        const getIsoWeekInfo = (date = new Date()) => {
          const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
          const dayNum = d.getUTCDay() || 7;
          d.setUTCDate(d.getUTCDate() + 4 - dayNum);
          const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
          const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
          const year = d.getUTCFullYear();

          const monday = new Date(d);
          monday.setUTCDate(d.getUTCDate() - ((d.getUTCDay() || 7) - 1));
          const sunday = new Date(monday);
          sunday.setUTCDate(monday.getUTCDate() + 6);

          const toDateOnly = (rawDate) => {
            const y = rawDate.getUTCFullYear();
            const m = pad2(rawDate.getUTCMonth() + 1);
            const day = pad2(rawDate.getUTCDate());
            return \\\`\\\${y}-\\\${m}-\\\${day}\\\`;
          };

          return {
            weekId: \\\`\\\${year}-\\\${pad2(weekNo)}\\\`,
            startDate: toDateOnly(monday),
            endDate: toDateOnly(sunday)
          };
        };

        const getPreviousWeekDate = (date = new Date()) => {
          const prev = new Date(date);
          prev.setDate(prev.getDate() - 7);
          return prev;
        };

        const normalizeExpressions = (value) => {
          if (!Array.isArray(value)) return [];
          return value
            .map((entry) => String(entry ?? '').trim())
            .filter((entry) => entry.length > 0);
        };

        const parseLegacyTextToExpressions = (text) => {
          const safeText = String(text ?? '').trim();
          if (!safeText) return [];
          return safeText
            .split('\\\\n')
            .map((line) => line.replace(/^[-*]\\\\s*/, '').trim())
            .filter((line) => line.length > 0);
        };

        const toJsDate = (value) => {
          if (!value) return null;
          if (typeof value?.toDate === 'function') return value.toDate();
          if (value instanceof Date) return value;
          const parsed = new Date(value);
          return Number.isNaN(parsed.getTime()) ? null : parsed;
        };

        const extractLegacyReferenceDate = (legacyData) => {
          const fromUpdatedAt = toJsDate(legacyData?.updatedAt);
          if (fromUpdatedAt) return fromUpdatedAt;
          const fromCreatedAt = toJsDate(legacyData?.createdAt);
          if (fromCreatedAt) return fromCreatedAt;
          return new Date();
        };

        const WEEK_ID_REGEX = /^\\\\d{4}-\\\\d{2}$/;
        const DATE_REGEX = /^\\\\d{4}-\\\\d{2}-\\\\d{2}$/;
        const DATE_FR_REGEX = /^\\\\d{2}\\\\/\\\\d{2}\\\\/\\\\d{4}$/;

        const toUtcDate = (year, month, day) => {
          const date = new Date(Date.UTC(year, month - 1, day));
          if (
            date.getUTCFullYear() !== year ||
            date.getUTCMonth() !== month - 1 ||
            date.getUTCDate() !== day
          ) {
            return null;
          }
          return date;
        };

        const parseFlexibleDate = (value) => {
          if (!value) return null;

          if (typeof value?.toDate === 'function') {
            const date = value.toDate();
            return toUtcDate(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
          }

          if (value instanceof Date) {
            return toUtcDate(value.getUTCFullYear(), value.getUTCMonth() + 1, value.getUTCDate());
          }

          const raw = String(value).trim();
          if (!raw) return null;

          if (DATE_REGEX.test(raw)) {
            const [year, month, day] = raw.split('-').map(Number);
            return toUtcDate(year, month, day);
          }

          if (DATE_FR_REGEX.test(raw)) {
            const [day, month, year] = raw.split('/').map(Number);
            return toUtcDate(year, month, day);
          }

          return null;
        };

        const parseIsoDateStrict = (value) => {
          if (typeof value !== 'string') return null;
          const raw = value.trim();
          if (!DATE_REGEX.test(raw)) return null;
          const [year, month, day] = raw.split('-').map(Number);
          return toUtcDate(year, month, day);
        };

        const ensureTextesWeekIds = async () => {
          if (textesWeekMigrationPromise) return textesWeekMigrationPromise;

          textesWeekMigrationPromise = (async () => {
            const snapshot = await getDocs(collection(db, 'textes'));
            const updates = [];

            snapshot.docs.forEach((texteDoc) => {
              const data = texteDoc.data();
              const existingWeekId = String(data?.weekId || '').trim();
              if (WEEK_ID_REGEX.test(existingWeekId)) return;

              const createdAtDate = toJsDate(data?.createdAt) || new Date();
              const weekInfo = getIsoWeekInfo(createdAtDate);
              updates.push(
                setDoc(
                  doc(db, 'textes', texteDoc.id),
                  {
                    weekId: weekInfo.weekId,
                    updatedAt: new Date()
                  },
                  { merge: true }
                )
              );
            });

            if (updates.length > 0) {
              await Promise.all(updates);
            }
          })();

          try {
            await textesWeekMigrationPromise;
          } finally {
            textesWeekMigrationPromise = null;
          }
        };

        const toIsoDate = (date) => {
          const y = date.getUTCFullYear();
          const m = pad2(date.getUTCMonth() + 1);
          const d = pad2(date.getUTCDate());
          return \\\`\\\${y}-\\\${m}-\\\${d}\\\`;
        };

        const isWithinRangeInclusive = (candidateDate, startDate, endDate) => {
          const c = candidateDate.getTime();
          return c >= startDate.getTime() && c <= endDate.getTime();
        };

        const toWeekRecord = (rawData, fallbackWeekInfo) => {
          if (!rawData || typeof rawData !== 'object') return null;
          const weekId = String(rawData.weekId || fallbackWeekInfo.weekId || '').trim();
          const parsedStartDate = parseFlexibleDate(rawData.startDate || rawData.dateDebut || fallbackWeekInfo.startDate);
          const parsedEndDate = parseFlexibleDate(rawData.endDate || rawData.dateFin || fallbackWeekInfo.endDate);
          const expressions = normalizeExpressions(rawData.expressions);

          if (
            !weekId ||
            !parsedStartDate ||
            !parsedEndDate ||
            expressions.length === 0 ||
            !WEEK_ID_REGEX.test(weekId)
          ) {
            return null;
          }

          const startTime = parsedStartDate.getTime();
          const endTime = parsedEndDate.getTime();
          if (endTime < startTime) return null;

          return {
            weekId,
            startDate: toIsoDate(parsedStartDate),
            endDate: toIsoDate(parsedEndDate),
            expressions,
            _startTime: startTime,
            _endTime: endTime
          };
        };

        const sortWeeksDesc = (weeks) => {
          return [...weeks].sort((a, b) => {
            if (b._endTime !== a._endTime) return b._endTime - a._endTime;
            if (b._startTime !== a._startTime) return b._startTime - a._startTime;
            return b.weekId.localeCompare(a.weekId);
          });
        };

        const buildSeedWeeks = () => {
          const current = getIsoWeekInfo(new Date());
          const previous = getIsoWeekInfo(getPreviousWeekDate(new Date()));
          return sortWeeksDesc([
            {
              ...current,
              expressions: [
                'Utilise au moins 3 connecteurs logiques.',
                'Ajoute une phrase de conclusion forte.',
                'Varie la longueur de tes phrases.'
              ]
            },
            {
              ...previous,
              expressions: [
                'Commence ton texte par une accroche.',
                'D\xE9cris une \xE9motion avec au moins 2 adjectifs.',
                'Relis et corrige les accords.'
              ]
            }
          ]);
        };

        const saveWeeks = async (weeks) => {
          await Promise.all(
            weeks.map((week) =>
              setDoc(doc(db, WEEKLY_COLLECTION, week.weekId), {
                weekId: week.weekId,
                startDate: week.startDate,
                endDate: week.endDate,
                expressions: week.expressions,
                updatedAt: new Date()
              }, { merge: true })
            )
          );
        };

        const getWeeklyExpressionsData = async () => {
          const fallbackWeek = getIsoWeekInfo(new Date());
          let weeklyDocs = await getDocs(collection(db, WEEKLY_COLLECTION));
          let weeks = sortWeeksDesc(
            weeklyDocs.docs
              .map((weekDoc) => toWeekRecord(weekDoc.data(), fallbackWeek))
              .filter(Boolean)
          );

          if (weeks.length === 0) {
            const legacyDocRef = doc(db, LEGACY_DEFI_DOC.collection, LEGACY_DEFI_DOC.id);
            const legacySnap = await getDoc(legacyDocRef);

            if (legacySnap.exists() && legacySnap.data()?.texte) {
              const legacyData = legacySnap.data();
              const legacyReferenceDate = extractLegacyReferenceDate(legacyData);
              const legacyWeekInfo = getIsoWeekInfo(legacyReferenceDate);
              const legacyExpressions = parseLegacyTextToExpressions(legacyData.texte);
              const migratedWeek = {
                ...legacyWeekInfo,
                expressions: legacyExpressions.length > 0 ? legacyExpressions : ['Compl\xE8te cette semaine avec tes premi\xE8res expressions.']
              };

              await setDoc(doc(db, WEEKLY_COLLECTION, migratedWeek.weekId), {
                ...migratedWeek,
                migratedFromLegacy: true,
                migratedAt: new Date(),
                updatedAt: new Date()
              });

              weeks = [migratedWeek];
            } else {
              weeks = buildSeedWeeks();
              await saveWeeks(weeks);
            }
          }

          weeks = sortWeeksDesc(weeks);
          const metaRef = doc(db, WEEKLY_META_DOC.collection, WEEKLY_META_DOC.id);
          const metaSnap = await getDoc(metaRef);
          const metaWeekId = metaSnap.exists()
            ? String(metaSnap.data()?.currentWeekId || '').trim()
            : '';

          const today = new Date();
          const todayUtc = toUtcDate(today.getUTCFullYear(), today.getUTCMonth() + 1, today.getUTCDate());

          const currentWeekByMeta = metaWeekId
            ? weeks.find((week) => week.weekId === metaWeekId)
            : null;
          const currentWeekByDate = weeks.find((week) =>
            isWithinRangeInclusive(todayUtc, new Date(week._startTime), new Date(week._endTime))
          );

          let currentWeek = currentWeekByMeta || currentWeekByDate || weeks[0];
          let selectionMode = (currentWeekByMeta || currentWeekByDate) ? 'current' : 'latest_published';

          if (!currentWeek) {
            currentWeek = {
              ...fallbackWeek,
              expressions: ['Ajoute les expressions de la semaine.'],
              _startTime: parseFlexibleDate(fallbackWeek.startDate).getTime(),
              _endTime: parseFlexibleDate(fallbackWeek.endDate).getTime()
            };
            weeks = [currentWeek];
            await saveWeeks(weeks);
            selectionMode = 'current';
          }

          if (selectionMode === 'current' && metaWeekId !== currentWeek.weekId) {
            await setDoc(metaRef, {
              currentWeekId: currentWeek.weekId,
              updatedAt: new Date()
            }, { merge: true });
          }

          return {
            currentWeekId: currentWeek.weekId,
            currentWeek,
            weeks,
            archives: weeks.filter((week) => week.weekId !== currentWeek.weekId),
            selectionMode,
            isCurrentWeek: selectionMode === 'current'
          };
        };

        const setWeeklyExpressionsForWeek = async ({ weekId, startDate, endDate, expressions }) => {
          const defaultWeek = getIsoWeekInfo(new Date());
          const cleanWeekId = String(weekId || defaultWeek.weekId).trim();
          const startDateInput = String(startDate || defaultWeek.startDate).trim();
          const endDateInput = String(endDate || defaultWeek.endDate).trim();
          const startDateObj = parseIsoDateStrict(startDateInput);
          const endDateObj = parseIsoDateStrict(endDateInput);
          const cleanStartDate = startDateObj ? toIsoDate(startDateObj) : '';
          const cleanEndDate = endDateObj ? toIsoDate(endDateObj) : '';
          const cleanExpressions = normalizeExpressions(expressions);

          if (!cleanWeekId) throw new Error('weekId manquant');
          if (cleanExpressions.length === 0) throw new Error('Aucune expression fournie');
          if (!WEEK_ID_REGEX.test(cleanWeekId)) throw new Error('Format weekId invalide (attendu YYYY-WW)');
          if (!startDateObj || !endDateObj) throw new Error('Format de date invalide (attendu YYYY-MM-DD)');
          if (endDateObj.getTime() < startDateObj.getTime()) throw new Error('La date de fin doit etre apres la date de debut');

          const weekRef = doc(db, WEEKLY_COLLECTION, cleanWeekId);
          const existingSnap = await getDoc(weekRef);
          const createdAt = existingSnap.exists() ? existingSnap.data().createdAt || new Date() : new Date();

          await setDoc(weekRef, {
            weekId: cleanWeekId,
            startDate: cleanStartDate,
            endDate: cleanEndDate,
            dateDebut: cleanStartDate,
            dateFin: cleanEndDate,
            expressions: cleanExpressions,
            createdAt,
            updatedAt: new Date()
          }, { merge: true });

          await setDoc(doc(db, WEEKLY_META_DOC.collection, WEEKLY_META_DOC.id), {
            currentWeekId: cleanWeekId,
            updatedAt: new Date()
          }, { merge: true });

          return {
            weekId: cleanWeekId,
            startDate: cleanStartDate,
            endDate: cleanEndDate,
            expressions: cleanExpressions
          };
        };

        const repairLegacyMigrationWeeks = async () => {
          const legacyDocRef = doc(db, LEGACY_DEFI_DOC.collection, LEGACY_DEFI_DOC.id);
          const legacySnap = await getDoc(legacyDocRef);

          if (!legacySnap.exists() || !legacySnap.data()?.texte) {
            return { repaired: false, reason: 'legacy_missing' };
          }

          const legacyData = legacySnap.data();
          const legacyReferenceDate = extractLegacyReferenceDate(legacyData);
          const expectedWeekInfo = getIsoWeekInfo(legacyReferenceDate);
          const expectedWeekId = expectedWeekInfo.weekId;
          const expectedExpressions = parseLegacyTextToExpressions(legacyData.texte);

          const migratedQuery = query(collection(db, WEEKLY_COLLECTION), where('migratedFromLegacy', '==', true));
          const migratedSnapshot = await getDocs(migratedQuery);
          if (migratedSnapshot.empty) {
            return { repaired: false, reason: 'no_migrated_docs' };
          }

          const migratedDocs = migratedSnapshot.docs.map((item) => ({ id: item.id, data: item.data() }));
          const expectedDoc = migratedDocs.find((item) => item.id === expectedWeekId);
          const mismatchedDocs = migratedDocs.filter((item) => {
            return (
              item.id !== expectedWeekId ||
              item.data.startDate !== expectedWeekInfo.startDate ||
              item.data.endDate !== expectedWeekInfo.endDate
            );
          });

          if (!expectedDoc || mismatchedDocs.length > 0) {
            const expressionsFromExisting = expectedDoc?.data?.expressions;
            const normalizedExpressions = normalizeExpressions(expressionsFromExisting ?? expectedExpressions);
            await setDoc(doc(db, WEEKLY_COLLECTION, expectedWeekId), {
              weekId: expectedWeekId,
              startDate: expectedWeekInfo.startDate,
              endDate: expectedWeekInfo.endDate,
              dateDebut: expectedWeekInfo.startDate,
              dateFin: expectedWeekInfo.endDate,
              expressions: normalizedExpressions.length > 0 ? normalizedExpressions : ['Ajoute les expressions de la semaine.'],
              migratedFromLegacy: true,
              migratedAt: new Date(),
              legacyReferenceDate: expectedWeekInfo.startDate,
              updatedAt: new Date()
            }, { merge: true });

            await Promise.all(
              mismatchedDocs
                .filter((item) => item.id !== expectedWeekId)
                .map((item) => deleteDoc(doc(db, WEEKLY_COLLECTION, item.id)))
            );
          }

          const weeklyData = await getWeeklyExpressionsData();
          const metaRef = doc(db, WEEKLY_META_DOC.collection, WEEKLY_META_DOC.id);
          if (weeklyData.isCurrentWeek) {
            await setDoc(metaRef, {
              currentWeekId: weeklyData.currentWeekId,
              updatedAt: new Date()
            }, { merge: true });
          } else {
            await setDoc(metaRef, {
              currentWeekId: deleteField(),
              updatedAt: new Date()
            }, { merge: true });
          }

          return {
            repaired: true,
            expectedWeekId,
            selectionMode: weeklyData.selectionMode
          };
        };

        const getDefiActuel = async () => {
          const data = await getWeeklyExpressionsData();
          if (!data?.currentWeek) return null;
          return {
            weekId: data.currentWeek.weekId,
            startDate: data.currentWeek.startDate,
            endDate: data.currentWeek.endDate,
            expressions: data.currentWeek.expressions,
            texte: data.currentWeek.expressions.join('\\\\n')
          };
        };
        
        const setDefi = async (texte) => {
          const defaultWeek = getIsoWeekInfo(new Date());
          const expressions = parseLegacyTextToExpressions(texte);
          await setWeeklyExpressionsForWeek({
            ...defaultWeek,
            expressions
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
        window.getIsoWeekInfo = getIsoWeekInfo;
        window.getWeeklyExpressionsData = getWeeklyExpressionsData;
        window.setWeeklyExpressionsForWeek = setWeeklyExpressionsForWeek;
        window.repairLegacyMigrationWeeks = repairLegacyMigrationWeeks;
        window.migrateTextesWeekIds = ensureTextesWeekIds;
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
  ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white pt-16">
    <div class="max-w-3xl mx-auto px-4 py-6">
      <button onclick="history.back()" class="mb-8 bg-white border border-gray-200 rounded-xl shadow-sm px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
        <span class="mr-2">&larr;</span>
        Retour aux productions
      </button>

      <div id="texteContainer" class="space-y-6">
        <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 text-center">
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
