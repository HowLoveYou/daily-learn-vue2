<template>
  <div class="layout-container flex">
    <Sidebar />
    <div class="main">
      <LayoutHeader />
      <div
        class="main-container"
        v-loading="Boolean(globalLoading)"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
      >
        <transition name="fade" mode="out-in">
          <div ref="appContent" class="inner-content">
            <keep-alive :include="/^keep-alive/">
              <router-view />
            </keep-alive>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import { mapState } from "vuex";

export default {
  name: "LayoutC",
  components: {
    Sidebar,
    LayoutHeader,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("common", ["globalLoading"]),
  },
};
</script>
<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}

.main-container {
  position: relative;
  overflow: hidden;
  padding: 20px 0 20px 20px;

  .fade-enter-active {
    transition: opacity 0.28s cubic-bezier(0, 0, 0.15, 1);
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}

.inner-content {
  position: relative;
  overflow-x: hidden;
  padding-right: 20px;
  height: 100%;

  &.full-inner {
    padding-right: 0;
  }
}
</style>
