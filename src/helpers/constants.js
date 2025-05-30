export const APP_NAME = 'Vue DevTools Accessibility Plugin';

function unindent (value) {
  if (
    !value.startsWith('  ') &&
    !value.startsWith('\n  ')
  ) {
    return value;
  }
  return value
    .split('\n')
    .map((line) => {
      if (line.startsWith('  ')) {
        return line.replace('  ', '');
      }
      return line;
    })
    .join('\n')
    .trim();
}

export const VITE_CONFIG_EXAMPLE = unindent(`
  // vite.congif.js
  import vue from '@vitejs/plugin-vue';
  import { defineConfig } from 'vite';
  import vueDevTools from 'vite-plugin-vue-devtools';

  export default defineConfig({
    plugins: [
      vue(),
      vueDevTools()
    ]
  });
`);

export const MAIN_JS_EXAMPLE = unindent(`
  // main.js
  import { createApp } from 'vue';
  import vueDevToolsAccesibility from 'vue-dev-tools-accessibility';

  import App from '@/App.vue';

  const app = createApp(App);
  app.use(vueDevToolsAccesibility);
  app.mount('#app');
`);
