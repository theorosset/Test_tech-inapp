import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import allArticle from "../views/allArticle.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/allArticle",
    name: "allArticle",
    component: allArticle,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
