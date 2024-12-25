import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcssNormalize from 'postcss-normalize';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        historyApiFallback: true, // for React Router
    },
    css: {
        postcss: {
            plugins: [
                postcssNormalize(), // for normalize.css
            ],
        },
    },
});
