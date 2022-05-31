<template>
  <h1>Articles de notre blog</h1>
  <articleList :articles="articles" :users="users" />
</template>

<script>
import articleList from "../components/articles/articleList.vue";
import { mapActions, mapState } from "vuex";

export default {
  /*eslint-disable*/
  name: "articlePage",
  components: { articleList },
  computed: {
    ...mapState(["articles","users"]),
  },
 async mounted(){
    await this.$nextTick();
    await this.axiosArticles();
    await this.axiosUsers();
  },
  methods:{
    ...mapActions(["axiosArticles","axiosUsers"])
  }
};
</script>

<style scoped>
h1{
    font-size: 21px;
    font-weight: bold;
    max-width: 500px;
    margin: auto;
    margin-top: 20px;
}
</style>
