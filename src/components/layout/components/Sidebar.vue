<template>
  <div class="sidebar" :class="{ active: collapse }">
    <Logo />
    <el-scrollbar class="scrollbar-wrap">
      <el-menu :collapse="collapse" router class="menu-wrap">
        <template v-for="(item, index) in menus">
          <el-submenu v-if="item.children" :key="index" :index="item.menuName">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">{{ item.menuName }}</span>
            </template>
            <el-menu-item
              v-for="(subMenu, subIndex) in item.children"
              :key="subIndex"
              :index="subMenu.menuUrl"
            >
              {{ subMenu.menuName }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :key="item.menuId" :index="item.menuUrl">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ item.menuName }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import menus from "./menu.js";
import { mapState } from "vuex";
export default {
  name: "SideBar",
  components: {
    Logo,
  },
  data() {
    return {
      menus,
    };
  },
  computed: {
    ...mapState("common", ["collapse"]),
  },
};
</script>
<style lang="less" scoped>
.sidebar {
  display: flex;
  overflow: hidden;
  width: 232px;
  height: 100vh;
  background: #fff;
  transition: all 0.2s;
  flex-direction: column;

  &.active {
    width: 64px;
  }
}

.scrollbar-wrap {
  overflow-x: hidden;
  flex: 1;
  border-right: 1px solid #e6e6e6;
}

.menu-wrap {
  border-right: none;
}
</style>
