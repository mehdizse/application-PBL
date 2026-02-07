import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, f as addAttribute, d as renderSlot, g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.474d762c.mjs';
import 'html-escaper';
import { $ as $$BaseLayout } from './_id_.astro.0a7e80ea.mjs';
/* empty css                                                      */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                                                      */
const $$Astro = createAstro("https://your-blog-url.netlify.app");
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { frontmatter } = Astro2.props;
  const { title, author, date } = frontmatter || {};
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-GJTNY2MX" }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<article class="section-container py-12 astro-GJTNY2MX">
    <!-- Article Header -->
    <header class="max-w-3xl mx-auto mb-12 astro-GJTNY2MX">
      <div class="mb-6 astro-GJTNY2MX">
        <a href="/" class="text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-200 astro-GJTNY2MX">
          ← Retour à l'accueil
        </a>
      </div>
      
      <h1 class="text-5xl font-bold text-gray-900 mb-4 leading-tight astro-GJTNY2MX">${title}</h1>
      
      <div class="flex flex-col md:flex-row md:items-center md:justify-between border-t border-b border-gray-200 py-6 astro-GJTNY2MX">
        <div class="flex items-center space-x-4 mb-4 md:mb-0 astro-GJTNY2MX">
          <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold astro-GJTNY2MX">
            ${author?.charAt(0)}
          </div>
          <div class="astro-GJTNY2MX">
            <p class="font-semibold text-gray-900 astro-GJTNY2MX">${author}</p>
            <p class="text-sm text-gray-600 astro-GJTNY2MX">Auteur</p>
          </div>
        </div>
        
        <div class="flex items-center space-x-6 text-gray-600 astro-GJTNY2MX">
          <div class="flex items-center space-x-2 astro-GJTNY2MX">
            <span class="text-xl astro-GJTNY2MX">📅</span>
            <time${addAttribute(date, "datetime")} class="astro-GJTNY2MX">
              ${new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })}
            </time>
          </div>
          <div class="flex items-center space-x-2 astro-GJTNY2MX">
            <span class="text-xl astro-GJTNY2MX">⏱️</span>
            <span class="astro-GJTNY2MX">5 min</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="max-w-3xl mx-auto astro-GJTNY2MX">
      <div class="prose prose-lg max-w-none mb-16 astro-GJTNY2MX">
        ${renderSlot($$result2, $$slots["default"])}
      </div>

      <!-- Article Footer with CTA -->
      <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200 astro-GJTNY2MX">
        <h3 class="text-2xl font-bold text-gray-900 mb-3 astro-GJTNY2MX">✨ Vous avez aimé cet article ?</h3>
        <p class="text-gray-700 mb-6 astro-GJTNY2MX">
          Explorez d'autres productions d'élèves et découvrez comment l'apprentissage par projet transforme l'éducation.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 astro-GJTNY2MX">
          <a href="/" class="btn-primary astro-GJTNY2MX">
            Lire d'autres articles
          </a>
          <a href="/about" class="btn-secondary astro-GJTNY2MX">
            En savoir plus sur le PBL
          </a>
        </div>
      </div>
    </div>
  </article>
` })}`;
}, "D:/mon_projet/pbl-writing-blog/src/layouts/PostLayout.astro", void 0);

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<h2 id=\"introduction\">Introduction</h2>\n<p>L’apprentissage par projet (PBL) est une approche pédagogique qui encourage les élèves à apprendre en s’engageant dans des projets réels. Dans cet article de blog, nous explorerons comment le PBL peut améliorer les compétences en écriture et favoriser la créativité chez les élèves.</p>\n<h2 id=\"la-puissance-de-lapprentissage-par-projet\">La Puissance de l’Apprentissage par Projet</h2>\n<p>Le PBL permet aux élèves de prendre en charge leur apprentissage. En travaillant sur des projets qui les intéressent, les élèves deviennent plus motivés et engagés. Cette approche non seulement améliore les compétences en écriture, mais aide également à développer la pensée critique et les capacités de résolution de problèmes.</p>\n<h2 id=\"vitrine-des-projets-délèves\">Vitrine des Projets d’Élèves</h2>\n<p>Voici quelques exemples de projets d’élèves qui mettent en évidence l’efficacité de l’apprentissage par projet en écriture :</p>\n<ol>\n<li>\n<p><strong>Création d’Histoires Créatives</strong> : Les élèves ont créé leurs propres histoires basées sur des expériences personnelles, ce qui les a aidés à exprimer leurs pensées et leurs émotions de manière plus efficace.</p>\n</li>\n<li>\n<p><strong>Travaux de Recherche</strong> : En menantdes recherches sur des sujets dont ils sont passionnés, les élèves ont appris à structurer leur écriture et à présenter leurs conclusions de manière claire.</p>\n</li>\n<li>\n<p><strong>Écriture Collaborative</strong> : En groupes, les élèves ont collaboré à la rédaction d’une pièce de théâtre, ce qui a renforcé leurs compétences en travail d’équipe et leur a permis d’apprendre les uns des autres.</p>\n</li>\n</ol>\n<h2 id=\"conclusion\">Conclusion</h2>\n<p>L’apprentissage par projet est un outil puissant pour améliorer les compétences en écriture. En s’engageant dans des projets significatifs, les élèves non seulement améliorent leur écriture, mais développent aussi un amour pour l’apprentissage. Nous encourageons les éducateurs à intégrer le PBL dans leurs pratiques d’enseignement pour inspirer la prochaine génération d’écrivains.</p>");

				const frontmatter = {"layout":"../../layouts/PostLayout.astro","title":"Bienvenue dans l'Apprentissage par Projet en Écriture","author":"Jane Doe","date":"November 10, 2025"};
				const file = "D:/mon_projet/pbl-writing-blog/src/pages/posts/welcome-to-project-based-writing.md";
				const url = "/posts/welcome-to-project-based-writing";
				function rawContent() {
					return "\n## Introduction\n\nL'apprentissage par projet (PBL) est une approche pédagogique qui encourage les élèves à apprendre en s'engageant dans des projets réels. Dans cet article de blog, nous explorerons comment le PBL peut améliorer les compétences en écriture et favoriser la créativité chez les élèves.\n\n## La Puissance de l'Apprentissage par Projet\n\nLe PBL permet aux élèves de prendre en charge leur apprentissage. En travaillant sur des projets qui les intéressent, les élèves deviennent plus motivés et engagés. Cette approche non seulement améliore les compétences en écriture, mais aide également à développer la pensée critique et les capacités de résolution de problèmes.\n\n## Vitrine des Projets d'Élèves\n\nVoici quelques exemples de projets d'élèves qui mettent en évidence l'efficacité de l'apprentissage par projet en écriture :\n\n1. **Création d'Histoires Créatives** : Les élèves ont créé leurs propres histoires basées sur des expériences personnelles, ce qui les a aidés à exprimer leurs pensées et leurs émotions de manière plus efficace.\n\n2. **Travaux de Recherche** : En menantdes recherches sur des sujets dont ils sont passionnés, les élèves ont appris à structurer leur écriture et à présenter leurs conclusions de manière claire.\n\n3. **Écriture Collaborative** : En groupes, les élèves ont collaboré à la rédaction d'une pièce de théâtre, ce qui a renforcé leurs compétences en travail d'équipe et leur a permis d'apprendre les uns des autres.\n\n## Conclusion\n\nL'apprentissage par projet est un outil puissant pour améliorer les compétences en écriture. En s'engageant dans des projets significatifs, les élèves non seulement améliorent leur écriture, mais développent aussi un amour pour l'apprentissage. Nous encourageons les éducateurs à intégrer le PBL dans leurs pratiques d'enseignement pour inspirer la prochaine génération d'écrivains.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"introduction","text":"Introduction"},{"depth":2,"slug":"la-puissance-de-lapprentissage-par-projet","text":"La Puissance de l’Apprentissage par Projet"},{"depth":2,"slug":"vitrine-des-projets-délèves","text":"Vitrine des Projets d’Élèves"},{"depth":2,"slug":"conclusion","text":"Conclusion"}];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$PostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
