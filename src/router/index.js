import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/homePage.vue";
import articlePage from "../views/articlePage.vue";
import articleRead from "../components/articles/articleRead.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/allArticles",
    name: "articlesPage",
    component: articlePage,
  },
  {
    path: "/article/:id",
    name: "articleRead",
    component: articleRead,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
