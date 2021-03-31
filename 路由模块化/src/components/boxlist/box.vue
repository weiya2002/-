<template>
  <div class="box">
    <div class="img">
      <img :src="arr.pic" alt="" />
    </div>
    <div class="content">
      <p>{{ arr.name }}</p>
      <br />
      <p class="p">{{ arr.characteristic }}</p>
      <div class="enmm">
        <div class="k1">
          <span class="s1">￥{{ arr.minPrice }}</span>
          <span>低价</span>
        </div>
        <div class="k1">
          <span class="s2">￥{{ arr.originalPrice }}</span>
          <span class="s2">原价</span>
        </div>
        <div class="k1">
          <span class="s2">{{ arr.stores }}件</span>
          <span class="s2">限量</span>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    arr:{
      type:Object,
      default:()=>{
        return {
          pic:''
        }
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
    //   console.log(this.arr);
  },
  methods: {},
};
</script>
 
<style lang = "scss" scoped>
.box {
  border-top: 1px solid silver;
  width: 100%;
  height: 125px;
  display: flex;
  .img {
    box-sizing: border-box;
    padding: 5px;
    flex: 1;
    img {
      border-radius: 7px;
      width: 100%;
      height: 100%;
    }
  }
  .content {
    box-sizing: border-box;
    padding: 5px;
    flex: 3;
    .p {
      color: silver;
      font-size: 14px;
    }
    .enmm {
      width: 200px;
      display: flex;
      margin-top: 30px;
      justify-content: space-between;
      .k1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        .s1 {
          color: red;
        }
        .s2 {
          color: silver;
        }
      }
    }
  }
}
</style>