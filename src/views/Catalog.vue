<template>
  <div>
    <el-row>
      <el-button style="width:100px">按鈕</el-button>
      <el-button type="primary">按鈕</el-button>
      <el-button type="success">按鈕</el-button>
      <el-button type="info">按鈕</el-button>
      <el-button type="warning">按鈕</el-button>
      <el-button type="danger">按鈕</el-button>
    </el-row>
  </div>
  <div class="blockArea">
    <el-row :gutter="20" style="min-width:1045px;margin-left:0px;margin-right:0px;">
      <el-col :span="judge()" v-for="(item, index) in cardItemList" :key="index">
        <menu-item-card :item="item" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ImagesOverviewType } from "@/data/interface";
import menuItemCard from "@/components/menuItemCard.vue";
import { apiImagesOverview } from "@/API";

export default defineComponent({
  name: "Catalog",
  components: {
    menuItemCard,
  },
  setup() {
    const cardItemList = ref<ImagesOverviewType[]>([]);

    return {
      cardItemList,
    };
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {
    judge() {
      return screen.width / 250;
    },
  },
  mounted() {
    apiImagesOverview().then((res) => {
      console.log(res);
      this.cardItemList = res.data;
      console.log(this.cardItemList);
    });
  },
});
</script>

<style scoped>
.blockArea {
  overflow: auto;
  height: calc(100vh - 125px);
}
</style>

// { // image: require("@/assets/picture/logo.png"), // title: "test", // description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhhsssssssssssssss", // },
// { // image: require("@/assets/picture/logo.png"), // title: "test", // description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhh", // }, // { // image:
require("@/assets/picture/logo.png"), // title: "test", // description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhhssssss", // }, // { // image:
require("@/assets/picture/logo.png"), // title: "test", // description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhhaaaaaa", // }, // { // image:
require("@/assets/picture/logo.png"), // title: "test", // description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhhaaaaaa", // }, // { // image:
require("@/assets/picture/logo.png"), // title: "test", // description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhhaaaaaa", // }, // { // image:
require("@/assets/picture/logo.png"), // title: "test", // description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhhaaaaaa", // },
