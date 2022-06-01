<template>
  <div>
    <homeArticleList :articles="articles" :articlesLike="articlesLike" />
    <router-link to="/allArticles">Liste des articles</router-link>
  </div>
</template>

<script>
/*eslint-disable*/
import homeArticleList from "../components/homePage/homeArticleList.vue"
import {mapActions, mapState} from "vuex"
export default {
  name: "HomeView",
  components: {homeArticleList},
  data() {
    return {
      articlesLike: [],
      articlesLikeInLs: JSON.parse(localStorage.getItem("articleLike")),
    };
  },
    computed: {
    ...mapState(["articles","users"]),
  },
 async mounted(){
    await this.$nextTick();
    await this.axiosArticles();
    await this.axiosUsers();
    this.getArticlesLike();
  },
  methods:{
    ...mapActions(["axiosArticles","axiosUsers"]),

      getArticlesLike() {
      this.articlesLikeInLs.forEach((lsElement) => {
        const findInArticle = this.articles.find((articleElement) => {
          return lsElement.id == articleElement.id;
        });
        if (findInArticle != undefined) {
          return (
            this.articlesLike.push(findInArticle), console.log(this.articlesLike)
          );
        }
      });
    },
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
}
</style>
