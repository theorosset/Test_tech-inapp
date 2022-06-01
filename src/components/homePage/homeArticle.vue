<template>
  <div>
    <li v-for="articleLike of articlesLike" :key="articleLike.id">
      <h2>{{ articleLike.title }}</h2>
      <p>{{ articleLike.body }}</p>
    </li>
  </div>
</template>
<script>
export default {
  name: "homeArticle",
  props: { articlesLike: { type: Array } },
};
</script>
<style lang="scss" scoped>
li {
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
