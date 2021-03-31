<template>
 <div class="home">
 <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">商品</el-menu-item>
  <el-menu-item index="3">订单</el-menu-item>
  <el-menu-item index="4">会员</el-menu-item>
  <el-menu-item index="5">设置</el-menu-item>
  </el-menu>
 </div>
</template>
 
<script>
export default {
   data () {
      return {
           activeIndex: '1',
      };
 },
   mounted() {},
   methods: {},
}
</script>
 
<style lang = "scss" scoped> 
 
</style>