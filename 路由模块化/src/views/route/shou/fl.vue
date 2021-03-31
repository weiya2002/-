<template>
  <div class="fl">
    <input
      class="input"
      @keydown.enter="add"
      type="text"
      v-model="value"
      placeholder="请输入关键字"
    />
    <div class="conten">
      <ul class="fl-uu">
        <li class="fl-li" @click="path" :class="indexD === '' ? 'color' : ''">
          所有分类
        </li>
        <li
          class="fl-li"
          @click="path2(index)"
          :class="indexD === index ? 'color' : ''"
          v-for="(itme, index) in arr"
          :key="index"
        >
          {{ itme }}
        </li>
      </ul>
      <div class="fl-box">
        <div class="k1" v-if="indexD === ''">
          <viw :viw="viw"></viw>
          <div class="k2" v-for="itme in list" :key="itme.id">
            <img :src="itme.icon" alt="" />
            <span>{{ itme.name }}</span>
          </div>
        </div>
        <div class="k1" v-if="indexD === 0">
          <viw :viw="viw"></viw>

          <div class="k2" v-for="itme in lists" :key="itme.id">
            <img :src="itme.icon" alt="" />
            <span>{{ itme.name }}</span>
          </div>
        </div>
        <div class="k1" v-if="indexD === 1">
          <viw :viw="viw"></viw>

          <div class="k2" v-for="itme in lists" :key="itme.id">
            <img :src="itme.icon" alt="" />
            <span>{{ itme.name }}</span>
          </div>
        </div>
        <div class="k1" v-if="indexD === 2">
          <viw :viw="viw"></viw>

          <div class="k2" v-for="itme in lists" :key="itme.id">
            <img :src="itme.icon" alt="" />
            <span>{{ itme.name }}</span>
          </div>
        </div>
        <div class="k1" v-if="indexD === 3">
          <viw :viw="viw"></viw>

          <div class="k2" v-for="itme in lists" :key="itme.id">
            <img :src="itme.icon" alt="" />
            <span>{{ itme.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
var xxx;
import viw from "../../../components/viw/viw";
export default {
  data() {
    return {
      arr: ["居家", "配件装饰", "服装", "电器"],
      indexD: "",
      list: [],
      arrx: [
        "jujia2",
        "jujia",
        "peishi",
        "peishi2",
        "fuzhuang",
        "fuzhuang2",
        "dianqi2",
        "dianqi",
      ],
      lists: [],
      viw: [],
      value: "",
    };
  },
  components: {
    viw,
  },
  mounted() {
    this.getlist();
    this.getimg();
    this.fn.show();
  },
  methods: {
    add() {
      this.list = xxx;
      this.list = this.list.filter((el) => {
        return el.name.includes(this.value);
      });
      this.lists = this.list;
    },
    path() {
      this.getlist();
      this.indexD = "";
    },
    path2(index) {
      this.getlist();
      this.indexD = index;
      this.lists = this.list.filter((el) => {
        return el.type.includes(this.arrx[index]);
      });
    },
    getlist() {
      this.$axios({
        url: "https://api.it120.cc/small4/shop/goods/category/all",
        method: "post",
      }).then((res) => {
        console.log(res);
        this.list = res.data.data;
        this.fn.hide();
        xxx = res.data.data;
      });
    },
    getimg() {
      this.$axios({
        url: "https://api.it120.cc/small4/banner/list",
        method: "get",
      }).then((res) => {
        this.viw = res.data.data;
      });
    },
  },
};
</script>
 
<style lang = "scss" scoped>
.fl {
  width: 100%;
  height: 92%;
}
.input {
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 20px;
  background-color: #f5f5f5;
  border: 0;
  text-align: center;
  margin-top: 5px;
}
.conten {
  width: 100%;
  height: 100%;
  display: flex;
  .fl-uu {
    flex: 1;
    .fl-li {
      line-height: 35px;
    }
  }
  .fl-box {
    overflow: auto;
    flex: 3;
    .k1 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .k2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80px;
      height: 80px;
      img {
        width: 100%;
      }
    }
  }
}
.color {
  border-left: 2px solid red;
  color: red;
}
</style>