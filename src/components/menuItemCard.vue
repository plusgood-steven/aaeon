<template>
  <el-card :body-style="{ padding: '0px 10px', height: '300px' }" shadow="hover" class="box-card" style="cursor: pointer;">
    <img :src="item.image" class="image" style="padding-top: 10px" />
    <h1 style="font-weight: bold;">{{ item.title }}</h1>
    <div style="height: 100px; width: 100%;text-align: left">
      <i class="title" style=" word-wrap: break-word; ">{{ item.description }} </i>
    </div>
    <div class="bottom">
      <el-button type="text" class="button" @click.stop>詳細資訊</el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CardItem } from "@/data/cardItem";

export default defineComponent({
  name: "menuItemCard",
  props: {
    item: {
      required: true,
      type: Object as PropType<CardItem>,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 18px;
  color: #999;
}

.bottom {
  display: bottom;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  height: 100px;
  display: block;
}
.box-card {
  width: 250px;
  height: 300px;
  margin-top: 10px;
  position: relative;
  top: 0;
  left: 0;
}
</style>
