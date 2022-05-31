<template>
  <div>
    <router-link to="/allArticles">Liste des articles</router-link>
  </div>
</template>

<script>
/*eslint-disable*/

export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 2rem;
  font-family: "Roboto", sans-serif;
}
</style>
