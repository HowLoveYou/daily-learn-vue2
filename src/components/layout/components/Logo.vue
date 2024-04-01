<template>
  <div class="logo-container flex items-center p-24">
    <template v-if="collapse">
      <img :src="require('@/assets/logo.png')" class="logo-img" alt="" />
    </template>
    <template v-else>
      <img :src="require('@/assets/logo.png')" class="logo-img" alt="" />
      <span class="ml-12">LOGO</span>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LogoPage",
  data() {
    return {};
  },
  computed: {
    ...mapState("common", ["collapse"]),
  },
};
</script>
<style lang="less" scoped>
.logo-container {
  height: 56px;
  border-bottom: 1px solid #e7e7e7;
}

.logo-img {
  width: 30px;
  border-radius: 50%;
}
</style>
