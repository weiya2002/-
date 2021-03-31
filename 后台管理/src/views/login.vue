<template>
  <div class="login">
    <div class="box">
      <h1>UNI-ADMIN</h1>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="">
          <el-input v-model="form.user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.pass" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="btn" @click="add" type="primary">立即登录</el-button>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      form: {
        user: "",
        pass: "",
      },
    };
  },
  mounted() {},
  methods: {
    add() {
      this.$store.commit('getUser', this.form.user)
      this.$axios({
        url: "http://ceshi5.dishait.cn/admin/login",
        method: "post",
        data: { username: this.form.user, password: this.form.pass },
      }).then((res) => {
        if (res.status == 200) {
          console.log(res);
          this.$message({
            message: "登录成功",
            type: "success",
          });
          this.$router.push('/Home')
        }
      }).catch(res=>{
        this.$message.error('登录失败');
      })
    },
  },
};
</script>
 
<style lang = "scss" scoped>
.login {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    text-align: center;
    width: 50%;
    height: 275px;
    border: 1px solid silver;
  }
  h1 {
    font-size: 20px;
    margin: 20px 0;
  }
}
/deep/ {
  .el-form-item__content {
    margin-left: 0 !important;
    .el-input {
      width: 80% !important;
    }
  }
}
.btn {
  width: 80%;
}
</style>