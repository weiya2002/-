<template>
 <div class="loading" v-if="show">
     <div class="img">
         <img src="/img/login.gif" alt="">
     </div>
 </div>
</template>
 
<script>
export default {
    props: ['show'],
   data () {
      return {
          
      };
 },
   mounted() {
    //    console.log(this);
   },
   methods: {},
}
</script>
 
<style lang = "scss" scoped> 
 .loading{
     position: fixed;
     top: 0;
     left: 0;
     z-index: 999;
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     .img{
         width: 100px;
         img{
             width: 100%;
         }
     }
 }
</style>