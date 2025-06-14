<template>
  <div class="wrapper">
    <header>
      <img
        alt="Logo"
        class="logo"
        src="/logo.svg"
      />
      <h1>{{ APP_NAME }}</h1>
    </header>
    <main>
      <h3>
        A Vue-DevTools plugin that scans for accessibility issues on the page.
      </h3>

      <h2>
        Getting Started
      </h2>

      <ol>
        <li>
          Install the dependencies in your project:
          <DoxenCodeBox
            code="npm install --save-dev vue-dev-tools-accessibility@latest vite-plugin-vue-devtools@latest"
            :copy="false"
          />
        </li>
        <li>
          This plugin only works with the <code>vite-plugin-vue-devtools</code>.
          <DoxenCodeBox
            :code="VITE_CONFIG_EXAMPLE"
            :copy="false"
          />
        </li>
        <li>
          Run your app locally, it should have the Vue-DevTools floating at the bottom of the screen. Click on that and there should be an Accessibilty tab in the sidebar of the dev tools.
        </li>
      </ol>
    </main>
    <footer>
      <a
        class="github"
        href="https://GitHub.com/vue-dev-tools-accessibility"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33 33"
        >
          <path
            d="M16.499.613c-8.995 0-16.289 7.293-16.289 16.29 0 7.197 4.667 13.303 11.141 15.457.814.148 1.112-.354 1.112-.785l-.022-2.771c-4.531.984-5.487-2.184-5.487-2.184-.741-1.881-1.809-2.383-1.809-2.383-1.479-1.01.112-.99.112-.99 1.635.115 2.495 1.68 2.495 1.68 1.453 2.488 3.813 1.77 4.741 1.354.148-1.053.569-1.771 1.034-2.178-3.617-.412-7.42-1.809-7.42-8.051 0-1.778.635-3.232 1.677-4.371-.167-.412-.727-2.068.16-4.311 0 0 1.368-.438 4.479 1.67 1.299-.361 2.693-.542 4.078-.548 1.384.006 2.776.187 4.078.548 3.11-2.108 4.476-1.67 4.476-1.67.889 2.243.329 3.899.162 4.311 1.043 1.139 1.674 2.593 1.674 4.371 0 6.258-3.809 7.635-7.438 8.038.585.504 1.105 1.498 1.105 3.018 0 2.178-.02 3.934-.02 4.469 0 .436.293.941 1.12.783 6.468-2.158 11.13-8.26 11.13-15.455.001-8.999-7.292-16.292-16.289-16.292z"
            fill="currentcolor"
          />
        </svg>
        GitHub
      </a>
    </footer>
  </div>
</template>

<script>
import { DoxenCodeBox } from 'vue-doxen';

import {
  APP_NAME,
  VITE_CONFIG_EXAMPLE
} from '@/helpers/constants.js';

export default {
  name: 'App',
  components: {
    DoxenCodeBox
  },
  constants: {
    APP_NAME,
    VITE_CONFIG_EXAMPLE
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body {
    color: #E8EDF2;
    font-family: 'DM Sans', Avenir, Helvetica, Arial, sans-serif;
  }
</style>

<style scoped>
  .wrapper {
    background-color: #15171A;
    background-image: url('/logo-dim.svg');
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 66%;
    max-width: 1100px;
    margin: 0px auto;
    padding: 4rem;
    box-shadow: -20px 0px 20px #04040433, 20px 0px 20px #04040433;
  }
  header {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 40px 0px;
  }
  .logo {
    height: 48px;
  }
  li {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  code {
    background: #333;
    border-radius: 5px;
    font-size: 14px;
    padding: 2px 6px;
  }
  .hljs {
    border-radius: 5px;
  }
  footer {
    max-width: 400px;
    border-top: 1px solid #202C26;
    margin: 6rem auto 0px auto;
    padding: 3rem 0px 0px 0px;
    text-align: center;
  }
  .github {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: currentColor;
    text-decoration: none;
  }
  .github svg {
    height: 3rem;
    fill: currentColor;
  }
</style>
