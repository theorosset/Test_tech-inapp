<template>
  <i
    id="articleLike"
    v-if="hasLike == false"
    @click="liked"
    class="far fa-thumbs-up"
  ></i>
  <i id="articleLike" v-else @click="liked" class="fas fa-thumbs-up"></i>
</template>

<script>
export default {
  name: "articleGestionLike",
  components: {},
  data() {
    return {
      hasLike: false,
    };
  },
  props: { id: { type: String } },
  async mounted() {
    await this.$nextTick();
    this.findIfHasLike();
  },
  methods: {
    /**
     * function qui permet de liker et d'annuler son like
     */
    liked() {
      let articleInLs = localStorage.getItem("articleLike")
        ? JSON.parse(localStorage.getItem("articleLike"))
        : [];

      let articleLike = this.$route.params;

      //recherche pour savoir si le poste a déjà été like
      if (articleInLs != null) {
        const findArticleInLs = articleInLs.find((el) => {
          return el.id == this.id;
        });
        //si la recherche est validé on récupère un nouveau tableau et on l'enregistre dans le ls
        if (findArticleInLs) {
          const deleteLike = articleInLs.filter((el) => el.id != this.id);
          articleInLs = deleteLike;
          localStorage.setItem("articleLike", JSON.stringify(deleteLike));
        }
        //sinon on envoie le nouvelle article liker dans le ls
        else {
          articleInLs.push(articleLike);
          localStorage.setItem("articleLike", JSON.stringify(articleInLs));
        }
      }
      this.findIfHasLike();
    },
    //function pour regarder si le post a déjà été like ou non
    findIfHasLike() {
      let articleInLs = localStorage.getItem("articleLike")
        ? JSON.parse(localStorage.getItem("articleLike"))
        : [];

      if (articleInLs != null) {
        const findArticleInLs = articleInLs.find((el) => {
          return el.id == this.id;
        });
        if (findArticleInLs) {
          return (this.hasLike = true);
        } else {
          return (this.hasLike = false);
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/mixin.scss";

#articleLike {
  font-size: 21px;
  @include marginTopBottom(15px, 15px);
  &:hover {
    cursor: pointer;
  }
}
</style>
