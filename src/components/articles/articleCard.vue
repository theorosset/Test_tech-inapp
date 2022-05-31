<template>
  <div class="articleCard">
    <h1>Articles de notre blog</h1>
    <li v-for="article of articles" :key="article.id" class="articleElement">
      <img src="#" alt="#" />
      <h2></h2>
    </li>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "articleCard",
  props: { articles: { type: Array, default: () => [] },
           users: { type: Array, default: () => [] }  },
  methods:{    
      }
  }
;
</script>
<style scoped>
h1{
    font-size: 21px;
    font-weight: bold;
    max-width: 500px;
    margin: auto;
    margin-top: 20px;
}

.articleElement{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin: auto;
    margin-top: 30px;
    border: 1px solid black;
    border-radius: 5px;
}


</style>
