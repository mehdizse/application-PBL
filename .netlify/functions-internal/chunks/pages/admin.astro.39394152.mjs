import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.474d762c.mjs';
import 'html-escaper';
import { $ as $$BaseLayout } from './_id_.astro.0a7e80ea.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                                                      */
const $$Astro = createAstro("https://your-blog-url.netlify.app");
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`
  
  ${maybeRenderHead()}<div class="pt-12 min-h-screen bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 py-6">
      <!-- Header Admin -->
      <div class="bg-white border border-gray-200 rounded-lg p-3 mb-4">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-lg font-medium text-gray-900">
              Espace Enseignant
            </h1>
            <p class="text-sm text-gray-500">Gérez les productions de vos élèves</p>
          </div>
          <div id="userInfo" class="text-right">
            <p class="text-xs text-gray-400">Non connecté</p>
          </div>
        </div>
      </div>

      <!-- Section Connexion -->
      <div id="loginSection" class="bg-white border border-gray-200 rounded-lg p-4 mb-4">
        <h2 class="text-base font-medium text-gray-900 mb-4">Connexion Enseignant</h2>
        <form id="loginForm" class="space-y-3">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" id="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input type="password" id="password" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          </div>
          <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
            Se connecter
          </button>
        </form>
        <div id="loginError" class="mt-3 p-2 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md hidden">
          Erreur de connexion
        </div>
      </div>

      <!-- Dashboard Admin -->
      <div id="dashboardSection" class="hidden">
        <!-- Défi de la semaine -->
        <div class="bg-white border border-gray-200 rounded-lg p-4 mb-4">
          <h2 class="text-base font-medium text-gray-900 mb-3">
            Défi de la semaine
          </h2>
          <div class="space-y-2">
            <textarea id="defiInput" placeholder="Ex:
- Utiliser 3 connecteurs logiques
- Écrire au moins 8 lignes
- Ajouter une conclusion" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none"></textarea>
            <button onclick="definirDefi()" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
              Définir le défi
            </button>
          </div>
          <div id="defiActuel" class="mt-2 p-2 bg-gray-50 border border-gray-200 rounded-md">
            <p class="text-sm text-gray-600">Aucun défi défini</p>
          </div>
        </div>

        <!-- Actions rapides -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
          <button onclick="showAddGroupeModal()" class="bg-white border border-gray-300 text-gray-700 p-3 rounded-md hover:bg-gray-50 transition-colors text-center">
            <div class="text-base mb-1">+</div>
            <div class="text-sm font-medium">Ajouter un groupe</div>
          </button>
          <button onclick="showAddTexteModal()" class="bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-colors text-center">
            <div class="text-base mb-1">📝</div>
            <div class="text-sm font-medium">Ajouter un texte</div>
          </button>
          <button onclick="showBadgesModal()" class="bg-white border border-gray-300 text-gray-700 p-3 rounded-md hover:bg-gray-50 transition-colors text-center">
            <div class="text-base mb-1">🏆</div>
            <div class="text-sm font-medium">Gérer les badges</div>
          </button>
        </div>

        <!-- Liste des groupes -->
        <div class="bg-white border border-gray-200 rounded-lg p-4 mb-4">
          <h2 class="text-base font-medium text-gray-900 mb-3">
            Groupes d'élèves
          </h2>
          <div id="groupesList" class="space-y-2">
            <p class="text-gray-400 text-sm">Chargement...</p>
          </div>
        </div>

        <!-- Liste des textes -->
        <div class="bg-white border border-gray-200 rounded-lg p-4">
          <h2 class="text-base font-medium text-gray-900 mb-3">
            Textes des élèves
          </h2>
          <div id="textesList" class="space-y-3">
            <p class="text-gray-400 text-sm">Chargement...</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  
  <div id="addGroupeModal" class="fixed inset-0 bg-black/50 hidden flex items-center justify-center z-50">
    <div class="bg-white border border-gray-200 rounded-lg p-6 w-96 shadow-lg">
      <h3 class="text-base font-medium text-gray-900 mb-4">Ajouter un groupe</h3>
      <input type="text" id="groupeNomInput" placeholder="Nom du groupe (ex: Groupe A)" class="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
      <div class="flex gap-2">
        <button onclick="ajouterGroupe()" class="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Ajouter
        </button>
        <button onclick="closeModal('addGroupeModal')" class="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors">
          Annuler
        </button>
      </div>
    </div>
  </div>

  
  <div id="addTexteModal" class="fixed inset-0 bg-black/50 hidden flex items-center justify-center z-50">
    <div class="bg-white border border-gray-200 rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-lg">
      <h3 class="text-base font-medium text-gray-900 mb-4">Ajouter un texte</h3>
      <form id="texteForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Groupe</label>
          <select id="texteGroupeSelect" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="">Sélectionner un groupe</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Titre</label>
          <input type="text" id="texteTitreInput" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Type</label>
          <select id="texteTypeSelect" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
            <option value="Récit d'aventure">Récit d'aventure</option>
            <option value="Texte descriptif">Texte descriptif</option>
            <option value="Nouvelle fantastique">Nouvelle fantastique</option>
            <option value="Récit de voyage">Récit de voyage</option>
            <option value="Poème">Poème</option>
            <option value="Lettre">Lettre</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Contenu</label>
          <textarea id="texteContenuInput" rows="10" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
        </div>
        <div class="flex gap-2">
          <button type="submit" class="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Ajouter le texte
          </button>
          <button type="button" onclick="closeModal('addTexteModal')" class="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-50 transition-colors">
            Annuler
          </button>
        </div>
      </form>
    </div>
  </div>

  
  <div id="badgesModal" class="fixed inset-0 bg-black/50 hidden flex items-center justify-center z-50">
    <div class="bg-white border border-gray-200 rounded-lg p-6 w-full max-w-2xl shadow-lg max-h-[80vh] overflow-y-auto">
      <h3 class="text-base font-medium text-gray-900 mb-4">Gérer les badges</h3>
      <div id="badgesList" class="space-y-3">
        <!-- Badges will be loaded here -->
      </div>
      <div class="mt-4 flex justify-end">
        <button onclick="closeModal('badgesModal')" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors">
          Fermer
        </button>
      </div>
    </div>
  </div>

  
  <div id="confirmModal" class="fixed inset-0 bg-black/50 hidden flex items-center justify-center z-50">
    <div class="bg-white border border-gray-200 rounded-lg p-6 w-96 shadow-lg">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mr-3">
          <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        <div>
          <h3 class="text-base font-medium text-gray-900">Confirmer la suppression</h3>
          <p class="text-sm text-gray-500">Cette action est irréversible</p>
        </div>
      </div>
      
      <div id="confirmMessage" class="text-sm text-gray-700 mb-6 bg-gray-50 p-3 rounded-md">
        <!-- Message will be inserted here -->
      </div>
      
      <div class="flex gap-3">
        <button onclick="confirmAction()" class="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors font-medium">
          Supprimer
        </button>
        <button onclick="closeConfirmModal()" class="flex-1 bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300 transition-colors font-medium">
          Annuler
        </button>
      </div>
    </div>
  </div>
` })}`;
}, "D:/mon_projet/pbl-writing-blog/src/pages/admin.astro", void 0);

const $$file = "D:/mon_projet/pbl-writing-blog/src/pages/admin.astro";
const $$url = "/admin";

export { $$Admin as default, $$file as file, $$url as url };
