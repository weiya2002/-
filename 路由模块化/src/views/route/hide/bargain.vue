<template>
 <div class="">
    <nav><span @click="path">《</span> 砍价列表</nav>
 <box :arr="box[99761]"></box>
 <box :arr="box[99762]"></box>
 <box :arr="box[99763]"></box>
 <box :arr="box[99764]"></box>
 </div>
</template>
 
<script>
import box from '../../../components/boxlist/box'
export default {
   data () {
      return {
         box:[]
      };
 },
   components: {
    box
  },
   mounted() {
      this.fn.show()
       this.$axios({
      url: "https://api.it120.cc/small4/shop/goods/kanjia/list",
      method: "get",
    }).then((res) => {
      console.log(res);
      this.box = res.data.data.goodsMap;
      this.fn.hide()
    });
   },
   methods: {
      path(){
         this.$router.go(-1)
      }
   },
}
</script>
 
<style lang = "scss" scoped> 
 nav{
    width: 100%;
    text-align: center;
    line-height: 40px;
    position: relative;
    span{
      position: absolute;
      left: 10%;
    }
 }
</style>