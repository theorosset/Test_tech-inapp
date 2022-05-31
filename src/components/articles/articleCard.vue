<template>
  <div class="articleCard">
    <h1>Articles de notre blog</h1>
    <router-link
      v-for="article of articles"
      :key="article.id"
      :to="{ name: 'articleRead', params: { id: article.id } }"
    >
      <li class="articleElement">
        <h2>{{ article.title }}</h2>
        <p>{{ article.body }}</p>
      </li>
    </router-link>
  </div>
</template>

<script>
/*eslint-disable*/

export default {
  name: "articleCard",
  props: { articles: { type: Array, default: () => [] },
           users: { type: Array, default: () => [] }  },
  methods:{}
  };
</script>


<style lang="scss" scoped>
@import "@/assets/mixin.scss";
a{
    color: black;
    text-decoration: none;
}
h1{
    font-size: 21px;
    font-weight: bold;
    max-width: 500px;
    margin: auto;
    margin-top: 20px;
}
h2{
    @include textEllipsis;
    @include marginLeftRight(10px,10px);
    font-size: 19px;
    font-weight: bold;
    margin-top: 10px
}

p{
    @include textEllipsis;
    @include marginLeftRight(10px,10px);
    margin-top: 15px;
    margin-bottom: 10px;
    
}

.articleElement{
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: auto;
    margin-top: 30px;
    border: 1px solid black;
    border-radius: 5px;
}


</style>
