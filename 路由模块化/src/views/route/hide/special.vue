<template>
  <div class="special">
    <nav><span @click="path">《</span> 专栏详情</nav>
    <h3>{{ box.title }}</h3>
    <div class="img">
      <img :src="box.pic" alt="" />
    </div>
    <div class="content">
      <span>{{ box.descript }}</span>
    </div>
    <span class="span" v-html="box.content"></span>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      ID: "",
      box: [],
    };
  },
  mounted() {
    this.fn.show()
    this.ID = this.$route.query.id;
    this.$axios({
      url: "https://api.it120.cc/small4/cms/news/detail" + "?id=" + this.ID,
      method: "get",
    }).then((res) => {
      console.log(res);
      this.box = res.data.data;
      this.fn.hide()
    });
  },
  methods: {
    path() {
      this.$router.go(-1);
    },
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
h3 {
  text-align: center;
}
.img {
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  padding: 0 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
.content {
  width: 100%;
  text-indent: 2em;
  span {
    margin-top: 10px;
    display: block;
  }
}
.span{
    font-size: 12px;
}
</style>