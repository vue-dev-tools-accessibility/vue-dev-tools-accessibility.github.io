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
  import vueDevToolsAccessibility from 'vue-dev-tools-accessibility';

  export default defineConfig({
    plugins: [
      vue(),
      vueDevTools(),
      vueDevToolsAccessibility()
    ]
  });
`);
