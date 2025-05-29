<template>
  <header>
    <img
      alt="Vue logo"
      height="512"
      src="/logo.svg"
    />
    <button @click="runAxe">
      Run Axe
    </button>
  </header>
</template>

<script>
function setTheme (theme) {
  window.document.body.classList.remove('light');
  window.document.body.classList.remove('dark');
  window.document.body.classList.add(theme);
}
function handleError (error) {
  console.log('Axe had an error', error);
}
function setViolations (violations) {
  console.log('Axe found these violations', violations);
}

function listenToParent () {
  function displayMessage ($event) {
    const data = $event.message || $event.data;
    if (data.theme) {
      setTheme(data.theme);
    }
    if (data.error) {
      handleError(data.error);
    }
    if (data.violations) {
      setViolations(data.violations);
    }
  }
  if (window.addEventListener) {
    window.addEventListener('message', displayMessage, false);
  } else {
    window.attachEvent('onmessage', displayMessage);
  }
}
function sendToParent (action) {
  parent.postMessage({ action }, '*');
}


export default {
  name: 'App',
  methods: {
    runAxe: function () {
      sendToParent('runAxe');
    }
  },
  created: function () {
    listenToParent();
    sendToParent('sendTheme');
  }
};
</script>
