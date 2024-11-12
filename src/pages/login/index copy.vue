<template>
  <div class="login-container">
    <div class="logo">
      <img src="@/static/img/logo1.png" alt="logo" />
    </div>
    <h1>鸿运</h1>
    <div class="form-container">
      <div class="tabs">
        <span class="active">登录</span>
        <span>注册</span>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <input type="text" placeholder="请输入手机号" v-model="phone" required />
        </div>
        <div class="input-group">
          <input type="password" placeholder="请输入密码" v-model="password" required />
        </div>
        <div class="options">
          <label>
            <input type="checkbox" v-model="rememberMe" />
            记住密码
          </label>
          <a href="#" class="forgot-password">忘记密码?</a>
        </div>
        <button type="submit" class="login-button">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      password: '',
      rememberMe: false,
    };
  },
  methods: {
    handleLogin() {
      // 处理登录逻辑
      console.log('手机号:', this.phone);
      console.log('密码:', this.password);
      console.log('记住密码:', this.rememberMe);
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #1a1a2e, #16213e);
  color: white;
}

.logo img {
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 20px;
}

.form-container {
  background: #0f3460;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}

.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tabs span {
  cursor: pointer;
}

.tabs .active {
  border-bottom: 2px solid #e94560;
}

.input-group {
  margin-bottom: 15px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.forgot-password {
  color: #e94560;
  text-decoration: none;
}

.login-button {
  width: 100%;
  padding: 10px;
  background: #e94560;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
</style>
