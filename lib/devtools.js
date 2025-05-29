// eslint-disable-next-line import/no-extraneous-dependencies
import { addCustomTab, onDevToolsClientConnected } from '@vue/devtools-api';
import axe from 'axe-core';

/**
 * This is the tab title shown in the sidebar.
 * @type {String}
 */
const title = 'Accessibility';

const childIframeUrl = 'https://vue-dev-tools-accessibility.github.io';

function addIframeTab () {
  /**
   * A unique name used as an ID by the dev tools.
   * @type {String}
   */
  const name = 'vue-accessibility';

  /**
   * The name of a Material Design Icon, Iconify Ic Baseline icon, or a URL to an SVG.
   * https://fonts.google.com/icons
   * https://icones.netlify.app/collection/ic?variant=Baseline
   *
   * @type {String}
   */
  const icon = 'accessibility-new';

  /**
   * After clicking the tab, it renders an embedded iframe.
   */
  const view = {
    // 'iframe', 'vnode', 'sfc' - Each has a different object shape
    type: 'iframe',
    /**
     * URL for the iframe.
     * @type {String}
     */
    src: childIframeUrl,
    /**
     * Persist the iframe instance even if the tab is not active.
     * @type {Boolean}
     * @default true
     */
    persistent: true
  };

  /**
   * Determines which group to place the tab in, in the sidebar.
   * @type {'pinned'|'app'|'modules'|'advanced'}
   */
  const category = 'app';

  /**
   * Adds a tab in the sidebar of the Vite-Vue-Dev-Tools.
   * At time of writing the documentation for this is extremely bad.
   * https://devtools.vuejs.org/plugins/api
   * Maybe they fixed it in the future.
   */
  addCustomTab({ name, title, icon, view, category });
}

function tabSelected (win) {
  let selectedTab = win.document.querySelector('.router-link-active')
  if (selectedTab?.innerText === title) {
    return true;
  }
  return false;
}

function sendToChild (win, data) {
  if (tabSelected(win)) {
    const innerIframe = win.document.querySelector('iframe[src="' + childIframeUrl + '"]');
    const innerIframeWin = innerIframe.contentWindow;
    innerIframeWin.postMessage(data, '*');
  }
}

function runAxe (win) {
  axe
    .run()
    .then(({ violations }) => {
      sendToChild(win, { violations });
    })
    .catch((error) => {
      sendToChild(win, { error });
    });
}

function listenToChild (win) {
  function displayMessage ($event) {
    const data = $event.message || $event.data;
    const actionsMap = {
      runAxe,
      sendTheme
    };
    if (actionsMap[data?.action]) {
      actionsMap[data.action](win);
    }
  }
  if (win.addEventListener) {
    win.addEventListener('message', displayMessage, false);
  } else {
    win.attachEvent('onmessage', displayMessage);
  }
}

function sendTheme (win) {
  const storageKey = '__vue-devtools-theme__';
  const theme = window.localStorage.getItem(storageKey);
  sendToChild(win, { theme });
}
function watchTheme (win) {
  win.addEventListener('storage', () => {
    sendTheme(win);
  });
}

export function setupDevtools () {
  addIframeTab();

  onDevToolsClientConnected(function () {
    const vueDevToolsFrame = document.getElementById('vue-devtools-iframe');
    const vueDevToolsWin = vueDevToolsFrame.contentWindow;
    listenToChild(vueDevToolsWin);
    watchTheme(vueDevToolsWin);
  });
}
