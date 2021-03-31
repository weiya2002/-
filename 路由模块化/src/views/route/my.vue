<template>
  <div class="my">
      <link rel="stylesheet" href="http://at.alicdn.com/t/font_2399480_ab4jg2fi3ig.css">
    <router-view></router-view>
    <tab :arr = arr></tab>
  </div>
</template>
 
<script>
import tab from '@/components/tab/tab.vue'
export default {
  data() {
    return {
      arr: [
        {
          title: "首页",
          icon: "iconfont iconshouye",
          path:"/home"
        },
        {
          title: "分类",
          icon: "iconfont iconfenlei",
          path:"/fl"
        },
        {
          title: "购物车",
          icon: "iconfont icongouwuchekong",
          path:"/cart"
        },
        {
          title: "我的",
          icon: "iconfont icongeren",
          path:"/my"
        },
      ],
    };
  },
  components: {
      tab,
  },
  mounted() {},
  methods: {},
};
</script>
 
<style lang = "scss" scoped>
.my{
  width: 100%;
  height: 100%;
}
</style>