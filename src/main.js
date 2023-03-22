import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css';
import Notifications from '@kyvg/vue3-notification'
import SimpleBarVue from 'simplebar-vue';
import Vuex from 'vuex';
import store from '../store';
import  {BootstrapVue}  from 'bootstrap'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);
app.use(SimpleBarVue);
app.use(BootstrapVue)
app.use(Notifications);
app.use(Vuex);
app.use(store);
app.use(router).mount('#app'); // Mount the app