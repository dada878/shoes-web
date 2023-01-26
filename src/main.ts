import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagramSquare, faFacebook, faTwitter, faLine, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'animate.css';
import { createI18n } from 'vue-i18n';
import zhTW from "./language/zh-TW.json";
import zhCn from "./language/zh-CN.json";
import en from "./language/en-US.json";
import ja from "./language/ja-JP.json";

//TODO: code review for the enitry project

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") ?? navigator.language ?? "zh-TW",
  fallbackLocale: "zh-TW",
  messages: {
    "zh-TW": zhTW,
    "zh-CN": zhCn,
    "en-US": en,
    "ja-JP": ja
  }
});

library.add(faInstagramSquare, faFacebook, faTwitter, faLine, faInstagram);

createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .component('font-awesome-icon', FontAwesomeIcon).mount('#app');