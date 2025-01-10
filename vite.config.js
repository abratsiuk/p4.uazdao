import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNormalize from 'postcss-normalize';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/p4.uazdao/',
  server: {
    open: '/p4.uazdao/',
  },
  css: {
    postcss: {
      plugins: [
        postcssNormalize(), // for normalize.css
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `
        $base-path: '/p4.uazdao/';
        @use '/src/styles/variables.scss' as *;`,
      },
    },
  },
});
