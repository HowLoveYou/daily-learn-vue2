<template>
  <div class="layout-container">
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "LayoutC",
  components: {
    Sidebar,
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
