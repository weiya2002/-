<template>
  <!-- 详情 -->
  <div class="detail">
    <viw :viw="viw"></viw>
    <div class="content">
      <p class="p1">{{ null || boxs.basicInfo.name }}</p>
      <p class="p2">{{ boxs.basicInfo.characteristic }}</p>
      <p class="p3">
        <span>低价￥</span>{{ boxs.basicInfo.minPrice }}<span>原价￥</span
        >{{ boxs.basicInfo.originalPrice }} <span>库存</span
        >{{ boxs.basicInfo.stores }}
      </p>
    </div>
    <div v-html="boxs.content"></div>
  </div>
</template>
 
<script>
import viw from "../../../components/viw/viw";
export default {
  data() {
    return {
      boxs: [],
      viw: [],
    };
  },
  components: {
    viw,
  },
  created() {
    this.$axios({
      url:
        "https://api.it120.cc/small4/shop/goods/detail?id=" +
        this.$store.state.ID,
      method: "POST",
    }).then((res) => {
      this.boxs = res.data.data;
      this.boxs.pics.forEach((element) => {
        this.viw.push({ picUrl: element.pic, id: element.id });
      });
    });
  },
  mounted() {},
  methods: {},
};
</script>
 
<style lang = "scss" scoped>
.detail {
  width: 100%;
  height: 100%;
}
/deep/ {
  p {
    width: 100%;
    img {
      width: 100% !important;
      height: 100px !important;
    }
  }
}
.content {
  width: 100%;
  height: 110px;
  .p1 {
    font-size: 18px;
    text-indent: 2rem;
    margin: 7px 0;
  }
  .p2 {
    text-indent: 2rem;
    margin: 10px 0;
    color: silver;
    font-size: 14px;
  }
  .p3 {
    text-indent: 2rem;
    color: silver;
    font-size: 14px;
  }
}
</style>