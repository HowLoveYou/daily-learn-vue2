<template>
  <div class="layout-header flex items-center">
    <el-button class="border-0" @click="toggerCollapse">
      <i
        class="cursor-pointer"
        :class="[collapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
      ></i>
    </el-button>
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
          <span v-if="index == levelList.length - 1" class="no-redirect">{{
            item.meta.title
          }}</span>
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "layout-header",
  data() {
    return {
      levelList: null,
    };
  },
  computed: {
    ...mapState("common", ["collapse"]),
  },
  watch: {
    $route() {
      this.getBreadcrumd();
    },
  },
  methods: {
    ...mapMutations("common", {
      changeCollapse: "CHANGE_COLLAPSE",
    }),
    getBreadcrumd() {
      let matched = this.$route.matched.filter(
        (item) => item.meta && item.meta.title
      );
      this.levelList = matched.filter((item) => item.meta && item.meta.title);
    },
    toggerCollapse() {
      this.changeCollapse();
    },
  },
};
</script>
<style lang="less" scoped>
.layout-header {
  width: 100%;
  height: 56px;
  background: #fff;
  flex-shrink: 0;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  margin-left: 8px;
  font-size: 14px;
  line-height: 50px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
