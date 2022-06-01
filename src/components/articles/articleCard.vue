<template>
  <div class="articleCard">
    <li v-for="article of articles" :key="article.id" class="articleElement">
      <router-link :to="{ name: 'articleRead', params: { id: article.id } }">
        <h2>{{ article.title }}</h2>
        <p>{{ article.body }}</p>
      </router-link>
    </li>
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
   @include flexColumn;
   @include borderShadowRadius;
    max-width: 500px;
    margin: auto;
    margin-top: 30px;
    
    transition-duration: 0.3s;
    &:hover{
        transform: scale(1.05);
        transition-duration: 0.4s;
    }
}


</style>
