import { createApp } from 'vue';
import './assets/css/base.css';
import App from './App.vue';
import router from './router';
import store from './store';

// mock数据
// import axios from 'axios';
// import '@/mock/mock';

createApp(App).use(router).use(store).mount('#app');
