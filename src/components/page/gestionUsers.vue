<template>
  <div>
    <p class="allName">{{ findAllName() }}</p>
  </div>
</template>
<script>
export default {
  name: "gestionsUsers",

  props: { postUserId: { type: Number }, users: { type: Array } },
  async mounted() {
    await this.$nextTick();
    await this.findAllName();
  },
  methods: {
    findAllName() {
      const findUser = this.users.find((el) => el.id == this.postUserId);
      return findUser.name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixin.scss";
div {
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid white;
  box-shadow: 0px 8px 11px -7px rgba(0, 0, 0, 0.5);
}
.allName {
  @include marginTopBottom(10px, 10px);
  font-weight: 500;
  font-size: 17px;
}
</style>
