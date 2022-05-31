<template>
  <i @click="liked" id="articleLike" class="far fa-thumbs-up"></i>
</template>

<script>
export default {
  name: "articleGestionLike",
  props: { id: { type: String } },
  components: {},
  methods: {
    liked() {
      let articleInLs = [];
      let articleLike = this.$route.params;
      if (localStorage.getItem("articleLike")) {
        articleInLs = JSON.parse(localStorage.getItem("articleLike"));
      }
      if (articleInLs != null) {
        const findArticleInLs = articleInLs.find((el) => {
          return el.id == this.id;
        });
        console.log(findArticleInLs);
        //suppression a faire
        articleInLs.push(articleLike);
        localStorage.setItem("articleLike", JSON.stringify(articleInLs));
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#articleLike {
  font-size: 21px;
  &:hover {
    cursor: pointer;
  }
}
</style>
