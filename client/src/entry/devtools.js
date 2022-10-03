import { createApp } from 'vue'
import App from '../view/devtools.vue'
chrome.devtools.panels.create('gpg-ext', '', 'devtools.html')
createApp(App).mount('#app')
