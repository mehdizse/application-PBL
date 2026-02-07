// Import des fonctions Firestore
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  limit
} from "firebase/firestore";
import { db } from "./firebase.js";

// Collections
const GROUPES_COLLECTION = 'groupes';
const TEXTES_COLLECTION = 'textes';
const DEFIS_COLLECTION = 'defis';

// ===== GESTION DES GROUPES =====

export async function getGroupes() {
  try {
    // Requête simple sans ordre complexe pour éviter l'erreur d'index
    const q = query(collection(db, GROUPES_COLLECTION));
    const querySnapshot = await getDocs(q);
    const groupes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Trier localement par ordre alphabétique
    return groupes.sort((a, b) => a.nom.localeCompare(b.nom));
  } catch (error) {
    console.error('Erreur lors de la récupération des groupes:', error);
    return [];
  }
}

export async function addGroupe(nom) {
  try {
    const docRef = await addDoc(collection(db, GROUPES_COLLECTION), {
      nom,
      createdAt: serverTimestamp(),
      visible: true
    });
    return { id: docRef.id, nom, visible: true };
  } catch (error) {
    console.error('Erreur lors de l\'ajout du groupe:', error);
    throw error;
  }
}

export async function updateGroupe(id, updates) {
  try {
    const docRef = doc(db, GROUPES_COLLECTION, id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du groupe:', error);
    throw error;
  }
}

export async function deleteGroupe(id) {
  try {
    await deleteDoc(doc(db, GROUPES_COLLECTION, id));
    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression du groupe:', error);
    throw error;
  }
}

// ===== GESTION DES TEXTES =====

export async function getTextes() {
  try {
    // Requête simple sans ordre complexe pour éviter l'erreur d'index
    const q = query(collection(db, TEXTES_COLLECTION));
    const querySnapshot = await getDocs(q);
    const textes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Trier localement pour éviter l'erreur d'index
    return textes.sort((a, b) => {
      // D'abord par groupe, puis par date de création
      if (a.groupeNom < b.groupeNom) return -1;
      if (a.groupeNom > b.groupeNom) return 1;
      
      const dateA = a.createdAt?.toDate?.() || new Date(a.createdAt || 0);
      const dateB = b.createdAt?.toDate?.() || new Date(b.createdAt || 0);
      return dateB - dateA; // Plus récent d'abord
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des textes:', error);
    return [];
  }
}

export async function getTexte(id) {
  try {
    const docRef = doc(db, TEXTES_COLLECTION, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error('Erreur lors de la récupération du texte:', error);
    return null;
  }
}

export async function addTexte(texteData) {
  try {
    const docRef = await addDoc(collection(db, TEXTES_COLLECTION), {
      ...texteData,
      createdAt: serverTimestamp(),
      visible: true,
      version: 1
    });
    return { id: docRef.id, ...texteData };
  } catch (error) {
    console.error('Erreur lors de l\'ajout du texte:', error);
    throw error;
  }
}

export async function updateTexte(id, updates) {
  try {
    const docRef = doc(db, TEXTES_COLLECTION, id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du texte:', error);
    throw error;
  }
}

export async function deleteTexte(id) {
  try {
    await deleteDoc(doc(db, TEXTES_COLLECTION, id));
    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression du texte:', error);
    throw error;
  }
}

// ===== GESTION DES DÉFIS =====

export async function getDefiActuel() {
  try {
    // Requête simple sans filtre complexe pour éviter l'erreur d'index
    const q = query(collection(db, DEFIS_COLLECTION));
    const querySnapshot = await getDocs(q);
    const defis = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Filtrer et trier localement
    const defisActifs = defis.filter(defi => defi.actif === true);
    if (defisActifs.length === 0) return null;
    
    // Retourner le défi le plus récent
    return defisActifs.sort((a, b) => {
      const dateA = a.createdAt?.toDate?.() || new Date(a.createdAt || 0);
      const dateB = b.createdAt?.toDate?.() || new Date(b.createdAt || 0);
      return dateB - dateA;
    })[0];
  } catch (error) {
    console.error('Erreur lors de la récupération du défi:', error);
    return null;
  }
}

export async function setDefi(defiTexte) {
  try {
    // Désactiver les anciens défis
    const anciensDefis = await getDocs(collection(db, DEFIS_COLLECTION));
    anciensDefis.forEach(async (doc) => {
      await updateDoc(doc.ref, { actif: false });
    });

    // Créer le nouveau défi
    const docRef = await addDoc(collection(db, DEFIS_COLLECTION), {
      texte: defiTexte,
      createdAt: serverTimestamp(),
      actif: true
    });
    return { id: docRef.id, texte: defiTexte, actif: true };
  } catch (error) {
    console.error('Erreur lors de la création du défi:', error);
    throw error;
  }
}

// ===== UTILITAIRES =====

export async function getTextesVisibles() {
  try {
    // Requête simple sans filtre complexe pour éviter l'erreur d'index
    const q = query(collection(db, TEXTES_COLLECTION));
    const querySnapshot = await getDocs(q);
    const textes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Filtrer et trier localement
    return textes
      .filter(texte => texte.visible !== false) // Inclure les textes visibles ou non définis
      .sort((a, b) => {
        // D'abord par groupe, puis par date de création
        if (a.groupeNom < b.groupeNom) return -1;
        if (a.groupeNom > b.groupeNom) return 1;
        
        const dateA = a.createdAt?.toDate?.() || new Date(a.createdAt || 0);
        const dateB = b.createdAt?.toDate?.() || new Date(b.createdAt || 0);
        return dateB - dateA; // Plus récent d'abord
      });
  } catch (error) {
    console.error('Erreur lors de la récupération des textes visibles:', error);
    return [];
  }
}

export async function getGroupesVisibles() {
  try {
    // Requête simple sans filtre complexe pour éviter l'erreur d'index
    const q = query(collection(db, GROUPES_COLLECTION));
    const querySnapshot = await getDocs(q);
    const groupes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Filtrer et trier localement
    return groupes
      .filter(groupe => groupe.visible !== false) // Inclure les groupes visibles ou non définis
      .sort((a, b) => a.nom.localeCompare(b.nom)); // Tri alphabétique
  } catch (error) {
    console.error('Erreur lors de la récupération des groupes visibles:', error);
    return [];
  }
}
