<template>
  <img :src="getImage()" alt="images d'exemple" />
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "gestionImage",
  props: ["id"],
  computed: {
    ...mapState(["images"]),
  },
  async mounted() {
    await this.$nextTick();
    await this.axiosImages();
  },
  methods: {
    ...mapActions(["axiosImages"]),

    getImage() {
      const findImg = this.images.find((img) => img.albumId == this.id);
      if (findImg != undefined) {
        return findImg.thumbnailUrl;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  margin-top: 10px;
  max-height: 150px;
  max-width: 150px;
}
</style>
