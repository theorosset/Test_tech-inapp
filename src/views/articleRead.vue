<template>
  <div class="article">
    <gestionUsers :postUserId="postUserId" :users="users" />
    <div class="articleText">
      <gestionImage :id="id" />
      <h1 class="title">{{ title }}</h1>
      <p>{{ body }}</p>
      <articleGestionLike :id="id" />
    </div>
  </div>
  <div class="returnToList">
    <router-link to="/allArticles">Revenir a la liste des articles</router-link>
  </div>
</template>

<script>
import axios from "axios";
import gestionUsers from "../components/page/gestionUsers.vue";
import articleGestionLike from "../components/articles/articleGestionLike.vue";
import gestionImage from "../components/page/gestionImage.vue";

import { mapState, mapActions } from "vuex";
export default {
  name: "articleRead",
  components: { articleGestionLike, gestionImage, gestionUsers },
  data() {
    return {
      title: "",
      body: "",
    };
  },
  computed: {
    ...mapState(["users"]),
  },
  props: { id: { type: String }, postUserId: { type: String } },

  async mounted() {
    await this.$nextTick();
    await this.axiosUsers();
    this.getArticleInfo();
  },

  methods: {
    getArticleInfo() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then((res) => {
          (this.title = res.data.title), (this.body = res.data.body);
        })
        .catch(
          () => (this.title = "l'article ne peux s'afficher actuellement")
        );
    },
    ...mapActions(["axiosUsers"]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/mixin.scss";

.returnToList {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

h1 {
  font-weight: bold;
  font-size: 21px;
  @include marginTopBottom(20px, 25px);
}

.article {
  @include flexColumn;
  @include borderShadowRadius();
  max-width: 670px;
  margin: auto;
  margin-top: 40px;
  background-color: white;
}
.articleText {
  @include flexColumn;
  @include paddingLeftRight(50px, 50px);
  align-items: center;
}
@media screen and (max-width: 520px) {
  .articleText {
    @include paddingLeftRight(20px, 20px);
  }
}
</style>
