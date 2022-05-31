<template>
  <div class="article">
    <h1 class="title">{{ title }}</h1>
    <p>{{ body }}</p>
    <articleGestionLike :id="id" />
  </div>
</template>

<script>
import axios from "axios";
import articleGestionLike from "../articles/articleGestionLike.vue";

export default {
  name: "articleRead",
  components: { articleGestionLike },
  data() {
    return {
      title: "",
      body: "",
    };
  },
  props: { id: { type: String } },
  async mounted() {
    await this.$nextTick();
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
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/mixin.scss";
h1 {
  font-weight: bold;
  font-size: 21px;
}

.article {
  @include flexColumn;
  max-width: 1100px;
  margin: auto;
  border: 1px solid black;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  margin-top: 40px;
  padding-left: 50px;
  padding-right: 50px;
}
</style>
