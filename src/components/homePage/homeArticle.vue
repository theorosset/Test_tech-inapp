<template>
  <div v-if="articlesLike.length > 0">
    <li v-for="articleLike of articlesLike" :key="articleLike.id">
      <gestionsUsers :postUserId="articleLike.userId" :users="users" />
      <gestionImage :id="JSON.parse(articleLike.id)" />
      <h2>{{ articleLike.title }}</h2>
      <p>{{ articleLike.body }}</p>
    </li>
  </div>
  <div v-else>
    <p class="ifNoArticleLike">
      Vous n'avez pas encore trouver d'article qui vous plaise ? <br />
      <router-link to="/allArticles">Allez voir tous les articles</router-link>
    </p>
  </div>
</template>
<script>
import gestionImage from "../page/gestionImage.vue";
import gestionsUsers from "../page/gestionUsers.vue";

export default {
  name: "homeArticle",
  components: { gestionImage, gestionsUsers },
  props: { articlesLike: { type: Array }, users: { type: Array } },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixin.scss";

li {
  @include flexColumn;
  @include borderShadowRadius;
  align-items: center;
  margin-top: 20px;
  background-color: white;
  max-width: 670px;
}
.ifNoArticleLike {
  @include flexColumn;
  @include paddingLeftRight(20px, 20px);
  @include paddingBottomTop(10px, 10px);
  @include borderShadowRadius;
  margin-top: 50px;
  align-items: center;
}
h2 {
  @include marginLeftRight(10px, 10px);
  @include h2Article;
}
p {
  @include marginLeftRight(10px, 10px);
  @include marginTopBottom(15px, 10px);
}
</style>
