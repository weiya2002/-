<template>
  <div class="">
    <nav><span @click="path">《</span> 严选专栏</nav>
    <div @click="add(itme)" class="content" v-for="itme in $store.state.special" :key="itme.id">
      <img :src="itme.pic" alt="" />
      <div class="font">
        <h3>{{ itme.title }}</h3>
        <p class="p">{{itme.descript}}</p>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      data: [],
    };
  },
  mounted() {},
  methods: {
    path() {
      this.$router.go(-1);
    },
    add(itme){
       this.$router.push({path:"/index/special",query:itme})
    }
  },
};
</script>
 
<style lang = "scss" scoped>
nav {
  width: 100%;
  text-align: center;
  line-height: 40px;
  position: relative;
  span {
    position: absolute;
    left: 10%;
  }
}
.content {
       margin: 10px 0;
  width: 100%;
  height: 240px;
  position: relative;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .font {
    color: white;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
h3,p{
   text-align: center;
}
.p{
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
   width: 70%;
   margin: 0 auto;
}
</style>