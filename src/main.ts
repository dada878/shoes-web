import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagramSquare, faFacebook, faTwitter, faLine, faInstagram } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css';

library.add(faInstagramSquare, faFacebook, faTwitter, faLine, faInstagram);

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')