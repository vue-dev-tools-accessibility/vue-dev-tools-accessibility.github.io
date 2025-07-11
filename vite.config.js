import { fileURLToPath, URL } from 'node:url';

/* eslint-disable-next-line */
import vue from '@vitejs/plugin-vue';
/* eslint-disable-next-line */
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';
import vueDevToolsAccessibility from 'vue-dev-tools-accessibility';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'normalize.css': ['normalize.css'],
          vue: ['vue'],
          'vue-doxen': ['vue-doxen'],
          'vue-options-api-constants-plugin': ['vue-options-api-constants-plugin']
        }
      }
    },
    sourcemap: true
  },
  plugins: [
    vue(),
    vueDevTools({
      launchEditor: 'subl'
    }),
    vueDevToolsAccessibility()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
