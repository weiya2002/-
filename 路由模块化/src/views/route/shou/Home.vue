<template>
  <div class="Home">
    <link
      rel="stylesheet"
      href="http://at.alicdn.com/t/font_2399480_f0n5bogrc2v.css"
    />
    <div class="boss">
      <viw :viw="viw"></viw>
      <ul class="uu">
        <li @click="path('/signin')" class="li">
          <i class="iconfont iconaixin"></i><span>签到</span>
        </li>
        <li @click="path('/giftcertificate')" class="li">
          <i class="iconfont iconshopping"></i><span>礼券</span>
        </li>
        <li @click="path('/bargain')" class="li">
          <i class="iconfont iconkanjia"></i><span>砍价</span>
        </li>
        <li @click="path('/specialcolumn')" class="li">
          <i class="iconfont icontaideng"></i><span>专栏</span>
        </li>
      </ul>
      <h3 class="h3">全民砍价</h3>
      <div @click="path('/bargain')"><box :arr="box[99764]"></box></div>
      <h3 class="h3s">精选专题</h3>
      <special></special>
      <h3 class="h3s">人气推荐</h3>
      <div class="list">
        <ul class="uus">
          <li @click="detail(itme.id)" class="lis" v-for="itme in box" :key="itme.id">
            <img :src="itme.pic" alt="" /><span>
              <p>{{ itme.name }}</p>
              <p class="s">{{ itme.characteristic }}</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
import box from "../../../components/boxlist/box";
import viw from "../../../components/viw/viw";
import special from "../../../components/special/special";
export default {
  data() {
    return {
      viw: [],
      box: [],
      boxs: [],
    };
  },
  components: {
    viw,
    box,
    special,
  },
  mounted() {
    this.fn.show();
    this.$axios({
      url: "https://api.it120.cc/small4/banner/list",
      method: "get",
    }).then((res) => {
      this.viw = res.data.data;
    });
    this.$axios({
      url: "https://api.it120.cc/small4/shop/goods/kanjia/list",
      method: "get",
    }).then((res) => {
      this.box = res.data.data.goodsMap;
      this.fn.hide();
    });
    this.$axios({
      url: "https://api.it120.cc/small4/cms/news/list",
      method: "get",
    }).then((res) => {
      this.boxs = res.data.data;
    });
    
  },
  methods: {
    path(val) {
      this.$router.push({ path: `/index${val}`});
      this.$store.commit('getSpecial', this.boxs)
    },
    detail(id){
      this.$store.commit('setId', id)
      this.$router.push('/index/detail')
    }
  },
}

</script>
 
<style lang = "scss" scoped>
.boss {
  width: 100%;
  margin-bottom: 72px;
}

.Home {
  position: relative;
  width: 100%;
  height: 100%;
}
.uu {
  width: 100%;
  height: 80px;
  display: flex;
  z-index: 99;
  background-color: white;
  position: absolute;
  top: 230px;
  justify-content: space-around;
  font-size: 20px;
  align-items: center;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  .li {
    display: flex;
    flex-direction: column;
    align-items: center;
    i {
      font-size: 45px;
    }
  }
}
.h3 {
  margin-top: 70px;
  text-align: center;
  width: 100%;
  line-height: 40px;
}
.h3s {
  text-align: center;
  width: 100%;
  line-height: 40px;
}
.list {
  width: 100%;
  .uus {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .lis {
      width: 45%;
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
        height: 78%;
      }
    }
  }
}
.s {
  color: #a8a8a8;
  font-size: 14px;
  width: 164px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>