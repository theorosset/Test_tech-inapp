import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import articlePage from "../views/articlePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/allArticles",
    name: "articlePage",
    component: articlePage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
