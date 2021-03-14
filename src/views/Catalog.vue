<template>
  <div class="selectArea">
    <div class="buttonArea">
      <el-row>
        <el-button class="buttonStyle" icon="el-icon-collection">COLLECTIONS</el-button>
        <el-button class="buttonStyle" icon="el-icon-files">CONTAINERS</el-button>
        <el-button class="buttonStyle" icon="el-icon-receiving">HELM CHARTS</el-button>
        <el-button class="buttonStyle" icon="el-icon-copy-document">MODELS</el-button>
      </el-row>
    </div>
    <el-select v-model="value" multiple filterable allow-create default-first-option placeholder="Search" class="selectStyle">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
  </div>
  <div class="blockArea">
    <el-row :gutter="30" style="min-width:1045px;margin-left:0px;margin-right:0px;">
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
      options: [
        {
          value: "Description",
          label: "Description",
        },
        {
          value: "Display Name",
          label: "Display Name",
        },
        {
          value: "Name",
          label: "Name",
        },
        {
          value: "Publisher",
          label: "Publisher",
        },
      ],
      value: [],
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
  margin-top: 20px;
  overflow: auto;
  height: calc(100vh - 210px);
}

.buttonStyle {
  width: 250px;
  height: 60px;
  text-align: left;
  font-weight: bold;
}

.selectArea {
  height: 100px;
  position: relative;
}

.buttonArea {
  min-width: 1045px;
  position: absolute;
  top: 0;
}

.selectStyle {
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
  margin-top: 10px;
}
</style>
