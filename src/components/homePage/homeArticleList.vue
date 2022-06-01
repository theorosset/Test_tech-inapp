<template>
  <section>
    <h1>Article que vous aimez</h1>
    <ul>
      <homeArticle :articlesLike="articlesLike" />
    </ul>
  </section>
</template>
<script>
import homeArticle from "./homeArticle.vue";

export default {
  name: "homeArticleList",
  components: { homeArticle },
  props: { articlesLike: { type: Array } },

  methods: {},
};
</script>

<style lang="scss" scoped></style>
