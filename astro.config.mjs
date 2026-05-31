// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Gehostet auf GitHub Pages unter /apato-sport/ — daher base setzen.
export default defineConfig({
  site: 'https://bastthonline-netizen.github.io',
  base: '/apato-sport',
  vite: {
    plugins: [tailwindcss()]
  }
});
