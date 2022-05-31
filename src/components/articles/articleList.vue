<template>
  <ul>
    <articleCard :articles="articles" :users="users" />
  </ul>
</template>
<script>
import articleCard from "./articleCard.vue";
export default {
  name: "articleList",
  props: {
    articles: { type: Array, default: () => [] },
    users: { type: Array, default: () => [] },
  },
  components: { articleCard },
};
</script>
