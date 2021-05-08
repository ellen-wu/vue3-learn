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
        v-model="name"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <van-field
        v-model="password_confirmation"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写一致密码' }]"
      />

      <van-field
        v-model="email"
        name="电子邮箱"
        label="电子邮箱"
        placeholder="电子邮箱"
        :rules="[{ required: true, message: '请输入正确的电子邮箱格式' }]"
      />

      <div style="margin: 16px;">
        <div class="link-login" @click="$router.push({path: '/login'})">
          已有账号，去登录
        </div>
        <van-button round block type="info" color="#44b883" style="border: 1px solid #44b883;" native-type="submit">提交</van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import { ref, reactive, toRefs } from 'vue'
  import { Notify } from 'vant';

  export default {
    name: "Register",
    components: {
      NavBar,
    },
    setup() {
      const userInfo = reactive({
        name: '',
        password: '',
        password_confirmation: '',
        email: '',
      });

      const onSubmit = () => {
        // 先验证
        if (userInfo.password != userInfo.password_confirmation) {
          Notify('亲，密码与确认密码不一致！');
        } else {
          // 提交给服务器

        }
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
