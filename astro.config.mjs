import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-blog-url.netlify.app',
  base: '/',
  integrations: [
    tailwind(),
  ],
});