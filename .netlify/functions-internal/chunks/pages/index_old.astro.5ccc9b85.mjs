import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.474d762c.mjs';
import 'html-escaper';
import { $ as $$BaseLayout } from './_id_.astro.aab9f6c1.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                                                      */
const $$Astro = createAstro("https://your-blog-url.netlify.app");
const $$IndexOld = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$IndexOld;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`
  
  ${maybeRenderHead()}<div class="pt-12 min-h-screen bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 py-6">
      <!-- Titre principal épuré -->
      <div class="text-center mb-6">
        <h1 class="text-2xl md:text-3xl font-medium text-gray-900 mb-2">
          Le Mur des Textes
        </h1>
        <p class="text-sm text-gray-600">
          Les productions d'expression écrite
        </p>
      </div>

    <!-- Défi de la semaine -->
    <div id="defiSection" class="bg-white border border-gray-200 rounded-lg p-4 mb-4 hidden">
      <div class="text-center">
        <h2 class="text-base font-medium text-gray-900 mb-2">Défi de la semaine</h2>
        <p id="defiTexte" class="text-sm text-gray-700 leading-relaxed"></p>
      </div>
    </div>

    <!-- Liste des productions par groupe -->
    <div id="textesContainer" class="space-y-3">
      <div class="text-center py-8">
        <p class="text-sm text-gray-500">Chargement des textes...</p>
      </div>
    </div>

    <!-- Message motivant final -->
    <div class="mt-6 text-center">
      <h2 class="text-lg font-medium text-gray-900 mb-1">
        Excellent travail toute la classe !
      </h2>
      <p class="text-sm text-gray-600">
        Continuez comme ça, vos textes sont superbes !
      </p>
    </div>
    </div>
  </div>

  
  <div id="adminLink" class="fixed bottom-12 right-4 hidden">
    <a href="/admin" class="bg-gray-100 text-gray-600 px-2.5 py-1 rounded text-xs font-medium hover:bg-gray-200 hover:text-gray-800 transition-all duration-150">
      🔐 Admin
    </a>
  </div>
` })}`;
}, "D:/mon_projet/pbl-writing-blog/src/pages/index_old.astro", void 0);

const $$file = "D:/mon_projet/pbl-writing-blog/src/pages/index_old.astro";
const $$url = "/index_old";

export { $$IndexOld as default, $$file as file, $$url as url };
