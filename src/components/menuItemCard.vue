<template>
  <div class="cardstyle" @click="toDetail(item.Title)">
    <el-card :body-style="{ padding: '0px', height: '300px' }" shadow="hover" class="card2" style="cursor: pointer;   transform: rotate(3deg);" />
    <el-card :body-style="{ padding: '0px', height: '300px' }" shadow="hover" class="card2" style="cursor: pointer;   transform: rotate(-3deg);" />
    <el-card :body-style="{ padding: '0px', height: '300px' }" shadow="hover" class="box-card" style="cursor: pointer;">
      <img :src="item.CoverPhotoURL" class="image" style="padding-top: 10px" />
      <h1 style="font-weight: bold; margin-block-end:0 ;">{{ item.Title }}</h1>
      <div style="height: 50px; width: calc(100% -20px);text-align: left; padding: 0px 10px;">
        <i class="title" style=" word-wrap: break-word; ">{{ item.Description }} </i>
      </div>
      <div class="bottom">
        <el-button type="text" class="button">詳細資訊</el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ImagesOverviewType } from "@/data/interface";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "menuItemCard",
  props: {
    item: {
      required: true,
      type: Object as PropType<ImagesOverviewType>,
    },
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    toDetail(id: string) {
      this.router.push(`/catalog/${id}`);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardstyle {
  position: relative;
  width: 250px;
  height: 300px;
  margin-bottom: 30px;
}

.card2 {
  position: absolute;
  width: 250px;
  height: 300px;
  top: 0;
  left: 0;
  z-index: 2;
}

.title {
  font-size: 18px;
  color: #999;
}

.bottom {
  display: bottom;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  position: absolute;
  bottom: 10px;
  left: 10px;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  height: 150px;
  display: block;
}

.box-card {
  width: 250px;
  height: 300px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}
</style>
