<template>
  <div v-if="articlesLike.length > 0">
    <li v-for="articleLike of articlesLike" :key="articleLike.id">
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
export default {
  name: "homeArticle",
  props: { articlesLike: { type: Array } },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixin.scss";

li {
  border: 1px solid black;
  margin-bottom: 10px;
}
.ifNoArticleLike {
  @include flexColumn;
  @include paddingLeftRight(20px, 20px);
  @include paddingBottomTop(10px, 10px);
  @include borderShadowRadius;
  margin-top: 50px;
  align-items: center;
}
</style>
