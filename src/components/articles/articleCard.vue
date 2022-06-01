<template>
  <div class="articleCard">
    <li v-for="article of articles" :key="article.id" class="articleElement">
      <router-link
        :to="{
          name: 'articleRead',
          params: { id: article.id, postUserId: article.userId },
        }"
      >
        <gestionsUsers :users="users" :postUserId="article.userId" />
        <h2>{{ article.title }}</h2>
        <p>{{ article.body }}</p>
      </router-link>
    </li>
  </div>
</template>

<script>
import gestionsUsers from "../page/gestionUsers.vue";

export default {
  name: "articleCard",
  components: { gestionsUsers },
  props: {
    articles: { type: Array, default: () => [] },
    users: { type: Array, default: () => [] },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixin.scss";
li {
  background-color: white;
}

a {
  color: black;
  text-decoration: none;
}

h2 {
  @include textEllipsis;
  @include marginLeftRight(10px, 10px);
  @include h2Article;
}

p {
  @include textEllipsis;
  @include marginLeftRight(10px, 10px);
  @include marginTopBottom(15px, 10px);
}

.articleElement {
  @include flexColumn;
  @include borderShadowRadius;
  max-width: 600px;
  margin: auto;
  margin-top: 30px;

  transition-duration: 0.3s;
  &:hover {
    transform: scale(1.05);
    transition-duration: 0.4s;
  }
}
@media screen and (max-width: 520px) {
  .articleElement:hover {
    transform: scale(1.02);
    transition-duration: 0.4s;
  }
}
</style>
