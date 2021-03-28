<template>
  <el-container style="height: 100%" direction="vertical">
    <el-header height="45px">
      <img :src="logoPath.Path" class="image" />
    </el-header>
    <el-container>
      <el-aside width="230px">
        <el-menu
          :uniqueOpened="true"
          default-active="Catalog"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="Catalog">
            <i class="el-icon-menu"></i>
            <template #title>CATALOG</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const state = store.state;
    const isLogin = computed(() => state.isLogin);
    return {
      state,
      isLogin,
      store,
      router,
      route,
    };
  },
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath, this.route.name);
      if (key === "Catalog") this.router.push("/catalog");
    },
  },
  data() {
    const logoPath = {
      Path: require("@/assets/picture/logo.png"),
    };
    return {
      logoPath,
    };
  },
});
</script>

<style scoped>
.image {
  width: 8rem;
  height: 100%;
  display: block;
}
.el-aside {
  background-color: #1b1b1b;
  color: #333;
  text-align: left;
}

.el-header,
.el-footer {
  background-color: #1f1f1f;
  color: rgb(0, 0, 0);
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  overflow: auto;
  padding: 0;
}
</style>
