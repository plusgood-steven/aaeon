<template>
  <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row>
  <el-row :gutter="20" style="min-width:1045px">
    <el-col :span="judge()" v-for="(item, index) in cardItemList" :key="index">
      <menu-item-card :item="item" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {} from "@/data/cardItem";
import menuItemCard from "@/components/menuItemCard.vue";
import { CardItem } from "@/data/cardItem";

export default defineComponent({
  name: "Catalog",
  components: {
    menuItemCard,
  },
  setup() {
    return {};
  },
  data() {
    const cardItemList: Array<CardItem> = [
      {
        image: require("@/assets/picture/logo.png"),
        title: "test",
        description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhhsssssssssssssss",
      },
      {
        image: require("@/assets/picture/logo.png"),
        title: "test",
        description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhh",
      },
      {
        image: require("@/assets/picture/logo.png"),
        title: "test",
        description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhhssssss",
      },
      {
        image: require("@/assets/picture/logo.png"),
        title: "test",
        description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhhaaaaaa",
      },
      {
        image: require("@/assets/picture/logo.png"),
        title: "test",
        description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhhaaaaaa",
      },
      {
        image: require("@/assets/picture/logo.png"),
        title: "test",
        description: "hhhjsfhjkahfjjhhhhhhhhhhhhhhhhhhhhhhhhaaaaaa",
      },
    ];
    return {
      currentDate: new Date(),
      cardItemList,
    };
  },
  methods: {
    judge() {
      return screen.width / 150;
    },
  },
});
</script>

<style scoped></style>
