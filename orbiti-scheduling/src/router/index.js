import { createRouter, createWebHistory } from "vue-router";
import Login from "../feature/auth/pages/Login.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login, // Página de Login
  },
  // Adicione outras rotas aqui, se necessário
];

export const router = createRouter({
  history: createWebHistory(), // Removido o BASE_URL
  routes,
});
