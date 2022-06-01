<template>
  <section>
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
