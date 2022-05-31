<template>
  <div class="article">
    <h1 class="title">{{ title }}</h1>
    <p>{{ body }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "articleRead",
  data() {
    return {
      title: "",
      body: "",
    };
  },
  props: { id: { type: String } },
  async mounted() {
    await this.$nextTick();
    await this.getArticleInfo();
  },
  components: {},
  methods: {
    getArticleInfo() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then((res) => {
          return (this.title = res.data.title), (this.body = res.data.body);
        })
        .catch(
          () => (this.title = "l'article ne peux s'afficher actuellement")
        );
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  font-weight: bold;
  font-size: 21px;
}

.article {
  display: flex;
  flex-direction: column;
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
