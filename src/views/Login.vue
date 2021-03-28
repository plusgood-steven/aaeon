<template>
  <div class="center">
    <el-image style="margin: auto;margin-bottom:30px" :src="logoPath.Path" />
    <h1>Sign in</h1>
  </div>
  <div class="cc">
    <el-form ref="formVal" :model="form" :label-position="`top`" v-on:keyup.enter="handleSubmit()">
      <el-form-item label="Email :" prop="email">
        <el-input v-model="form.email" placeholder="請輸入帳號">
          <template #prefix>
            <i class="el-icon-user"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="Password :">
        <el-input v-model="form.password" show-password placeholder="請輸入密碼">
          <template #prefix>
            <i class="el-icon-lock"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item style="position:relative;left:70%;top:30px">
        <el-button type="text" style="margin-right: 20px">Register</el-button>
        <el-button type="primary" @click="handleSubmit()">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import { apiUserLogin } from "@/API";
export default defineComponent({
  name: "Login",
  components: {},
  setup() {
    const store = useStore();
    const state = store.state;
    const isLogin = computed(() => state.isLogin);
    const formVal = ref(null);
    return {
      state,
      isLogin,
      store,
      formVal,
    };
  },
  data() {
    const logoPath = {
      Path: require("@/assets/picture/logo.png"),
    };
    return {
      form: { password: "", email: "" },
      logoPath,
    };
  },
  methods: {
    handleSubmit() {
      if (!(this.form.password === "" || this.form.email === ""))
        apiUserLogin({
          password: this.form.password,
          email: this.form.email,
        })
          .then((res) => {
            console.log(res);
            this.store.commit("changeisLogin", true);
            this.store.commit("changeToken", res.data.data.tokenData.token);
            this.$router.push("/catalog");
            sessionStorage.setItem("email", this.form.email);
            sessionStorage.setItem("password", this.form.password);
          })
          .catch(() => {
            ElMessage.error("帳號密碼有誤 !");
            this.form.email = "";
            this.form.password = "";
          });
      else
        ElMessage.warning({
          message: "帳號或密碼尚未輸入",
          type: "warning",
        });
    },
  },
});
</script>

<style scoped>
.cc {
  margin: auto;
  position: relative;
  width: 30%;
  font-weight: 550;
}

.center {
  padding: 50px 0px;
  margin: 0;
  text-align: center;
  margin-block-start: 0px;
}
</style>
