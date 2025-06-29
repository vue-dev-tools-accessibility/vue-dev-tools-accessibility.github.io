import { createApp } from 'vue';
import constantsPlugin from 'vue-options-api-constants-plugin';

import App from '@/App.vue';

import 'normalize.css/normalize.css';
import 'highlightjs/styles/ir-black.css';
import '@/styles/styles.css';

const app = createApp(App);
app.use(constantsPlugin);
app.mount('#app');
