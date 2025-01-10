import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/p4.uazdao/',
  server: {
    open: '/p4.uazdao/',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        $base-path: '/p4.uazdao/';
        @use '/src/styles/variables.scss' as *;`,
      },
    },
  },
});
