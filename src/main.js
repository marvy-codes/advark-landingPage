import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@/App.vue';
import '@/index.css';
import routes from '@/router/routes.js';

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

app.use(router);
app.mount('#app');
