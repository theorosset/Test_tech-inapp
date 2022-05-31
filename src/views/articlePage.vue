<template>
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

<style scoped></style>
