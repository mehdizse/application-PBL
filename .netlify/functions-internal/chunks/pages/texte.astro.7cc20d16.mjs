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
const $$Texte = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Texte;
  const urlParams = Astro2.url.searchParams;
  urlParams.get("groupe") || "Inconnu";
  urlParams.get("titre") || "Texte sans titre";
  urlParams.get("type") || "Texte";
  urlParams.get("id");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate`
  
  ${maybeRenderHead()}<div class="pt-12 min-h-screen bg-background">
    <div class="max-w-4xl mx-auto px-4 py-6">
      <!-- Bouton retour épuré -->
      <button onclick="history.back()" class="mb-6 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 hover:text-gray-800 transition-all duration-150">
        <span class="mr-2">←</span>
        Retour aux productions
      </button>

    <!-- Contenu chargé dynamiquement -->
    <div id="texteContainer">
      <div class="text-center py-12">
        <div class="text-4xl mb-4 text-text-tertiary opacity-70">📚</div>
        <p class="text-text-secondary font-medium">Chargement du texte...</p>
      </div>
    </div>
    </div>
  </div>
` })}`;
}, "D:/mon_projet/pbl-writing-blog/src/pages/texte.astro", void 0);

const $$file = "D:/mon_projet/pbl-writing-blog/src/pages/texte.astro";
const $$url = "/texte";

export { $$Texte as default, $$file as file, $$url as url };
