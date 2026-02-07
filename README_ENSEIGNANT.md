# 📚 Mur d'Écriture Éducatif - Guide Enseignant

## 🎯 Objectif Pédagogique

Cette application a été conçue pour les élèves de 1ère année moyenne (11-12 ans, contexte algérien) dans le cadre de l'enseignement du FLE. Elle sert de **mur d'écriture numérique** pour valoriser les productions écrites et motiver les élèves.

## 🚀 Démarrage Rapide

### 1. Configuration Firebase

1. Créez un compte sur [Firebase Console](https://console.firebase.google.com/)
2. Créez un nouveau projet
3. Activez **Authentication** (Email/Password)
4. Créez une base de données **Firestore**
5. Copiez votre configuration dans le fichier `.env.local`

```bash
# Copiez .env.example vers .env.local
cp .env.example .env.local
```

### 2. Installation

```bash
npm install
npm run dev
```

L'application sera disponible sur `http://localhost:3001`

## 🔐 Accès Enseignant

### Connexion
- Allez sur `http://localhost:3001/admin`
- Utilisez Ctrl+Shift+A sur la page d'accueil pour révéler le lien admin
- Connectez-vous avec votre email Firebase

### Premier utilisateur
Créez votre premier compte enseignant directement depuis Firebase Console :
- Authentication → Users → Ajouter un utilisateur

## 📋 Fonctionnalités Admin

### 👥 Gestion des Groupes
- **Ajouter un groupe** : Donnez un nom simple (Groupe A, Équipe Étoiles, etc.)
- **Visible/Masquer** : Contrôlez ce que les élèves voient
- **Supprimer** : Supprimez un groupe et tous ses textes

### 📝 Gestion des Textes
- **Ajouter un texte** :
  - Sélectionnez le groupe
  - Entrez le titre et le type
  - Collez le contenu (texte brut ou Markdown)
  - Le texte est immédiatement visible pour les élèves

- **Modifier** : Corrigez les textes avant publication
- **Visible/Masquer** : Contrôlez la visibilité individuelle
- **Supprimer** : Retirez un texte définitivement

### 🏆 Système de Badges Pédagogiques

5 badges disponibles avec leurs significations :
- ⭐ **Texte de la semaine** : Meilleure production de la semaine
- 🏆 **Meilleure introduction** : Début de texte remarquable
- 🔗 **Bon usage des connecteurs** : Utilisation pertinente des mots de liaison
- ✍️ **Texte bien rédigé** : Qualité rédactionnelle
- 🤝 **Bon travail de groupe** : Collaboration réussie

### 🎯 Défi de la Semaine

Définissez un objectif hebdomadaire pour motiver les élèves :
- "Utiliser 3 connecteurs logiques"
- "Écrire au moins 8 lignes"
- "Ajouter une conclusion"
- "Utiliser des adjectifs descriptifs"

## 👁️ Vue Élève

### Page d'accueil (`/`)
- **Titre** : "Le Mur des Textes de Notre Classe"
- **Défi de la semaine** : Affiché en haut si défini
- **Liste des textes** : Par groupe, avec badges et couleurs
- **Design** : Ludique, coloré, adapté aux 11-12 ans

### Page de texte (`/texte`)
- Affichage simple du texte sélectionné
- Messages de félicitations personnalisés
- Bouton retour intuitif
- Pas de distraction, pas de fonction complexe

## 🎨 Personnalisation

### Couleurs des groupes
Les groupes ont des couleurs prédéfinies :
- Groupe A : Jaune
- Groupe B : Vert  
- Groupe C : Violet
- Groupe D : Bleu

### Messages motivants
Les messages sont automatiques basés sur les badges attribués.

## 📊 Utilisation Pédagogique

### Avant le cours
1. Préparez vos groupes dans l'admin
2. Définissez le défi de la semaine

### Pendant le cours
1. Les élèves écrivent sur papier (comme d'habitude)
2. Ramassez les productions
3. Sélectionnez les meilleurs textes

### Après le cours
1. Tapez les textes sélectionnés dans l'admin
2. Attribuez des badges pédagogiques
3. Publiez pour que les élèves puissent voir

### Suivi
- Utilisez les badges pour suivre les progrès
- Changez le défi chaque semaine
- Archivez les textes en les masquant si nécessaire

## 🔧 Maintenance

### Sauvegarde
Firebase sauvegarde automatiquement vos données. Pour une sauvegarde locale :
- Exportez depuis Firestore Console
- Conservez une copie des textes importants

### Dépannage
- **Problème de connexion** : Vérifiez votre configuration `.env.local`
- **Texte ne s'affiche pas** : Vérifiez que le texte est "Visible"
- **Admin inaccessible** : Utilisez Ctrl+Shift+A pour révéler le lien

## 🎓 Intégration Didactique

### Pour votre mémoire de Master
Cette application peut être décrite comme :

> **"Un blog éducatif simplifié, utilisé comme espace de valorisation des productions écrites, géré exclusivement par l'enseignant, adapté à l'âge des apprenants (11-12 ans) et au contexte scolaire algérien. L'outil permet de motiver les élèves en rendant leurs écrits visibles, de faciliter la réécriture par le feedback visuel (badges), et de suivre la progression individuelle et collective."**

### Compétences travaillées
- **Expression écrite** : Production et réécriture
- **Lecture** : Découverte des productions des pairs
- **Compétences numériques** : Utilisation raisonnée du numérique
- **Autonomie** : Consultation autonome des ressources

## 📞 Support

Pour toute question ou problème technique :
1. Vérifiez ce guide
2. Consultez la console du navigateur (F12)
3. Vérifiez la configuration Firebase

---

**Créé avec ❤️ pour l'enseignement du FLE en Algérie**  
*Adapté spécifiquement pour les élèves de 1ère année moyenne*
