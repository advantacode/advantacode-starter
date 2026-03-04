import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import routes from "./router/routes";


const app = createApp(App);
const router = createRouter({
	history: createWebHistory(),
	routes,
});

const pinia = createPinia();
app.use(pinia);
app.use(router);

const mountApp = () => {
	app.mount("#app");
};

mountApp();
