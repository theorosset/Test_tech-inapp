import { createStore } from "vuex";
import axios from "axios";

//recuperation des utilisateur
function getUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}
function getArticles() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}
function getImages() {
  return axios.get("https://jsonplaceholder.typicode.com/photos");
}
export default createStore({
  state: {
    users: [],
    articles: [],
    images: [],
  },
  getters: {},
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_ARTICLES(state, articles) {
      state.articles = articles;
    },
    SET_IMAGES(state, images) {
      state.images = images;
    },
  },
  actions: {
    async axiosUsers({ commit }) {
      const users = await getUsers();
      commit("SET_USERS", users.data);
    },
    async axiosArticles({ commit }) {
      const articles = await getArticles();
      commit("SET_ARTICLES", articles.data);
    },
    async axiosImages({ commit }) {
      const images = await getImages();
      commit("SET_IMAGES", images.data);
    },
  },
  modules: {},
});
