<template>
  <div>
    <div class="articleLikeList">
      <homeArticleList
        :articles="articles"
        :users="users"
        :articlesLike="articlesLike"
      />
    </div>

    <router-link to="/allArticles" v-if="articlesLike.length > 0">
      Liste des articles</router-link
    >
  </div>
</template>

<script>
import homeArticleList from "../components/homePage/homeArticleList.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "HomeView",
  components: { homeArticleList },
  data() {
    return {
      articlesLike: [],
      articlesLikeInLs: JSON.parse(localStorage.getItem("articleLike")),
      default: () => [],
    };
  },
  computed: {
    ...mapState(["articles", "users"]),
  },
  async mounted() {
    await this.$nextTick();
    await this.axiosArticles();
    await this.axiosUsers();
    if (this.articlesLikeInLs) {
      this.getArticlesLike();
    }
  },
  methods: {
    ...mapActions(["axiosArticles", "axiosUsers"]),

    getArticlesLike() {
      this.articlesLikeInLs.forEach((lsElement) => {
        const findInArticle = this.articles.find((articleElement) => {
          return lsElement.id == articleElement.id;
        });
        if (findInArticle != undefined) {
          return this.articlesLike.push(findInArticle);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.articleLikeList {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
}
</style>
