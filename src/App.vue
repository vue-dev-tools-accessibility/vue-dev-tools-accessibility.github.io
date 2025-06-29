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
      <section>
        <h2>
          A Vue-DevTools plugin that scans for accessibility issues on the page using Axe.
        </h2>
      </section>

      <section>
        <h3>
          Getting Started
        </h3>

        <ol>
          <li>
            In your Vue + Vite app, install the dev-tool dependencies:
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
      </section>

      <hr />

      <section>
        <div
          class="screenshot-section"
        >
          <h3>
            Screenshots
          </h3>

          <button
            class="screenshot-button"
            @click="showDarkTheme = !showDarkTheme"
          >
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                v-if="showDarkTheme"
                d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6M5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
                fill="currentColor"
              />
              <path
                v-else
                d="M13.503 5.414a15.076 15.076 0 0 0 11.593 18.194a11.1 11.1 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1 1 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.07 13.07 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3"
                fill="currentColor"
              />
              <title v-if="showDarkTheme">Moon</title>
              <title v-else>Sun</title>
            </svg>
            Switch to
            <template v-if="showDarkTheme">Light</template>
            <template v-else>Dark</template>
            Mode
          </button>
        </div>

        <a
          class="screenshot-link"
          :href="'/vdta-' + themeName + '.png'"
          target="_blank"
        >
          <img
            :alt="'Vue-DevTools Accessibility screenshot (' + themeName + ' mode)'"
            class="screenshot"
            height="829"
            :src="'/vdta-' + themeName + '.png'"
            width="1326"
          />
        </a>
      </section>

      <hr />

      <section>
        <h3>Features</h3>

        <ul>
          <li>Integrates directly with <code>vite-plugin-vue-devtools</code>.</li>
          <li>Uses <code>axe-core</code> to scan the page for accessibility violations.</li>
          <li>Re-scans when the DOM changes automatically.</li>
          <li>Can highlight/scroll-to DOM elements responsible for violations.</li>
          <li>
            Supported color contrast conformance levels:
            <ul>
              <li>WCAG 2 AA</li>
              <li>WCAG 2 AAA</li>
              <li>APCA Bronze</li>
              <li>APCA Silver+</li>
            </ul>
            <em>We are using the latest release of APCA, which is a public beta and may change before officially standardized.</em>
          </li>
        </ul>
      </section>
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
  },
  data: function () {
    return {
      showDarkTheme: true
    };
  },
  computed: {
    themeName: function () {
      if (this.showDarkTheme) {
        return 'dark';
      }
      return 'light';
    }
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
  h2 {
    font-size: 19px;
  }
  h3 {
    font-size: 24px;
  }
  ol li {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  ul li {
    margin-bottom: 1rem;
  }
  ul > li {
    padding-left: 0.5rem;
    list-style-type: disclosure-closed;
  }
  ul > li > ul > li {
    padding-left: 0.25rem;
    list-style-type: circle;
  }
  ul ul {
    margin-top: 1rem;
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
  hr {
    display: block;
    width: 400px;
    background: #202C26;
    border-width: 1px 0px 0px 0px;
    border-style: solid;
    border-color: #9CA3AF33;
    margin: 6rem auto 5rem;
  }
  .screenshot-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .screenshot-button {
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 43px;
    background: transparent;
    border: 1px solid #9CA3AF33;
    border-radius: 4px;
    margin-bottom: 8px;
    padding: 8px 8px;
    color: currentColor;
    cursor: pointer;
  }
  .screenshot-button:hover,
  .screenshot-button:focus {
    border: 1px solid #9CA3AF96;
  }
  .screenshot-button svg {
    width: 19.2px;
    height: 19.2px;
  }
  .screenshot-link {
    display: inline-block;
  }
  .screenshot {
    max-width: 100%;
    height: auto;
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
