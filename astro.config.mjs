import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: "https://linkinbio.josh.show",
  integrations: [
    tailwind(),
    sitemap(),
    icon(),
  ],
});
