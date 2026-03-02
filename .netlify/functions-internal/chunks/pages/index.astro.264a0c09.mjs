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
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`
  
  ${maybeRenderHead()}<div class="min-h-screen bg-gradient-to-b from-indigo-50/50 to-white pt-16">
    <div class="max-w-md mx-auto px-4 py-6 md:max-w-3xl">
      
      <!-- Hero / Titre -->
      <div class="text-center mb-8 px-4 py-6 bg-gradient-to-r from-indigo-50 to-white rounded-2xl">
        <div class="text-2xl mb-2">📝</div>
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Le Mur des Textes</h1>
        <p class="text-sm text-gray-600">Découvrez les créations de la classe ✨</p>
      </div>
      <!-- Cartes de textes -->
      <div id="textesContainer" class="space-y-4 mb-8">
        <div class="text-center py-8">
          <div class="text-2xl mb-2">📚</div>
          <p class="text-sm text-gray-600">Chargement des textes...</p>
        </div>
      </div>

    </div>
  </div>

  
  <div id="adminLink" class="fixed bottom-12 right-4 hidden">
    <a href="/admin" class="bg-indigo-600 text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-indigo-700 transition-colors">
      Espace enseignant
    </a>
  </div>
` })}`;
}, "D:/mon_projet/pbl-writing-blog/src/pages/index.astro", void 0);

const $$file = "D:/mon_projet/pbl-writing-blog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
