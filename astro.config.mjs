import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [svelte(), tailwind({
    applyBaseStyles: false
  }), react()],
  site: 'https://jeffmancilla.github.io',

});