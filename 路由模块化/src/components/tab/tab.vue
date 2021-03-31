<template>
  <div class="tab">
    <ul class="uu">
      <li @click="path(itme.path)" class="li" v-for="itme in arr" :key="itme.title">
        <i :class="itme.icon"></i><span>{{ itme.title }}</span>
      </li>
    </ul>
  </div>
</template>
 
<script>
export default {
  props: ["arr"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
      path(url){
          this.$router.push(`/my${url}`)
      }
  },
};
</script>
 
<style lang = "scss" scoped>
.uu {
  
  border-top: 1px solid silver;
  width: 100%;
  height: 60px;
  align-items: center;
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  background-color: white;
  .li {
    display: flex;
    flex-direction: column;
    align-items: center;
    i{
        margin-bottom: 5px;
        font-size: 20px0;
    }
  }
}
</style>