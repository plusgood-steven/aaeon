<template>
  <el-row :gutter="200">
    <el-col :lg="judge(index)" :md="5" :sm="8" :xs="12" v-for="(item, index) in cardItemList" :key="index">
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
    judge(index: number) {
      return (index + 1) % 5 === 0 ? 5 : 4;
    },
  },
});
</script>

<style scoped></style>
