<template>
  <div class="special">
    <ul class="uu" :style="{ width: box.length * 70 + '%' }">
      <li
      @click="path(itme)"
        class="li"
        :style="{ width: 100 / box.length + '%' }"
        v-for="itme in box"
        :key="itme.id"
      >
        <div class="img">
          <img :src="itme.pic" alt="" />
        </div>
        <div class="count">
          <p>{{ itme.title }}</p>
          <p class="s">{{ itme.descript }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      box: [],
    };
  },
  mounted() {
    this.$axios({
      url: "https://api.it120.cc/small4/cms/news/list",
      method: "get",
    }).then((res) => {
      this.box = res.data.data;
    });
  },
  methods: {
    path(itme){
      this.$router.push({path:"/index/special",query:itme})
    }
  },
};
</script>
 
<style lang = "scss" scoped>
.special {
  width: 100%;
  overflow: auto;
  height: 285px;
  .uu {
    display: flex;
    height: 100%;
    .li {
      border-radius: 10px;
      margin-left: 7px;
      margin-right: 7px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      height: 100%;
      .img {
        border-radius: 10px;
        overflow: hidden;
        width: 100%;
        height: 70%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .count {
        width: 100%;
        height: 20%;
        .s {
          color: #a8a8a8;
          font-size: 14px;
          width: 290px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>