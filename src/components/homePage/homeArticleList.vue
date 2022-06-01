<template>
  <section>
    <ul>
      <homeArticle :users="users" :articlesLike="articlesLike" />
    </ul>
  </section>
</template>
<script>
import homeArticle from "./homeArticle.vue";

export default {
  name: "homeArticleList",
  components: { homeArticle },
  props: { articlesLike: { type: Array }, users: { type: Array } },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
