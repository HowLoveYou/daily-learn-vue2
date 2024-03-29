<template>
  <div class="sidebar">
    <Logo />
    <el-scrollbar class="scrollbar-wrap" />
  </div>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  name: "SideBar",
  components: {
    Logo,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.sidebar {
  width: 232px;
  transition: all 0.2s;
}

.scrollbar-wrap {
  overflow-x: hidden;
}
</style>
