<template>
  <h1 class="center">登入</h1>
  <div class="cc">
    <el-form ref="formVal" :model="form" :label-position="`top`" v-on:keyup.enter="handleSubmit()">
      <el-form-item label="Email :" prop="email">
        <el-input v-model="form.email" placeholder="請輸入帳號">
          <template #prefix>
            <i class="el-icon-user"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="PassWord :">
        <el-input v-model="form.passWord" show-password placeholder="請輸入密碼">
          <template #prefix>
            <i class="el-icon-lock"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit()" style="position:relative;left:85%;top:30px">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import { apiUserLogin } from "@/API";
interface User {
  userName: string;
  passWord: string;
}
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
    return {
      form: { passWord: "", email: "" },
    };
  },
  methods: {
    handleSubmit() {
      if (!(this.form.passWord === "" || this.form.email === ""))
        apiUserLogin({
          Password: this.form.passWord,
          Email: this.form.email,
        })
          .then((data) => {
            console.log(data);
            this.store.commit("changeisLogin", true);
            this.$router.push("/catalog");
            sessionStorage.setItem("email", this.form.email);
            sessionStorage.setItem("password", this.form.passWord);
          })
          .catch(() => {
            ElMessage.error("帳號密碼有誤 !");
            this.form.email = "";
            this.form.passWord = "";
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
  width: 50%;
  font-weight: 550;
}

.center {
  padding: 50px 0px;
  text-align: center;
  margin-block-start: 0px;
}
</style>
