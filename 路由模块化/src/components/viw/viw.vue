<template>
  <div class="viw">
    <ul
      class="uu"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      :style="{ width: viw.length * 100 + '%', left: left ,transition:transition}"
    >
      <li
        :style="{ width: 100 / viw.length + '%' }"
        class="li"
        v-for="itme in viw"
        :key="itme.id"
      >
        <img :src="itme.picUrl" alt="" />
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  props: ["viw"],
  data() {
    return {
      left: "-100%",
      dir: "left",
      dataX:0,
      transition:'none'
    };
  },
  mounted() {},
  methods: {
    touchstart(e) {
        this.dataX =  e.targetTouches[0].pageX
    },
    touchmove(e) {
        if(this.dataX - e.targetTouches[0].pageX >0){
            this.dir = 'left'
        }else {
            this.dir = 'right'
        }
    },
    touchend() {
        this.transition = 'left 0.5s linear'
        if(this.dir === 'left'){
            this.left = '-200%'
            setTimeout(()=>{
                this.transition ='none'
                this.left = '-100%'
               var xxx =  this.viw.shift()
               this.viw.push(xxx)
            },500)
        }
        else {
            this.left = '0%'
            setTimeout(()=>{
                this.transition ='none'
                this.left = '-100%'
               var xxx =  this.viw.pop()
               this.viw.unshift(xxx)
            },500)
        }
    },
  },
};
</script>
 
<style lang = "scss" scoped>
.viw {
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 250px;
  .uu {
    display: flex;
    position: absolute;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>