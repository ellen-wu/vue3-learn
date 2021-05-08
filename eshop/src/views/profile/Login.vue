<template>
  <div>
    <nav-bar>
      <template v-slot:default>用户注册</template>
    </nav-bar>

    <div style="margin-top: 50px;margin-bottom: 50px;">
      <div style="text-align: center">
        <van-image style="padding-top: 1.0rem;" width="10rem" fit="contain" src="https://www.lmonkey.com/_nuxt/img/logo.ca1ae0c.png" />
      </div>
    </div>

    <van-form @submit="onSubmit">
      <van-field
        v-model="email"
        name="邮箱"
        label="邮箱"
        placeholder="邮箱"
        :rules="[{ required: true, message: '请填写用户邮箱' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <div style="margin: 16px;">
        <div class="link-login" @click="$router.push({path: '/register'})">
          没有账号，立即注册
        </div>
        <van-button round block type="info" color="#44b883" style="border: 1px solid #44b883;" native-type="submit">提交</van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import { ref, reactive, toRefs } from 'vue'
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { Notify, Toast } from 'vant';
  import { login } from 'network/user'


  export default {
    name: "Login",
    components: {
      NavBar,
    },
    setup() {
      const userInfo = reactive({
        email: '',
        password: '',
      });

      const router = useRouter();
      const store = useStore();

      const onSubmit = () => {
        login(userInfo).then(res => {
          // 将token保存到本地 window.localStorage  setItem(key, value) getItem(key)
          window.localStorage.setItem('token', res.access_token);
          // 在vuex中 isLogin
          store.commit('setIsLogin', true);

          console.log(res.access_token);
          Toast('登录成功');

          userInfo.email = '';
          userInfo.password = '';

          setTimeout(() => {
            router.go(-1);
          }, 500);
        });
      };

      return {
        ...toRefs(userInfo),
        onSubmit,
      }
    },
  }
</script>

<style scoped>
  .link-login {
    font-size: 14px;
    margin-bottom: 12px;
    color: #42b983;
    text-align: left;
  }
</style>
