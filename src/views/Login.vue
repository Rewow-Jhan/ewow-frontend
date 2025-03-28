<template>
  <div class="login-container absolute">
    <div class="login-box">
      <div class="h-1/2 flex justify-center items-center">
        <img src="../assets/images/Rewow-logo-white.png" alt="Logo" class="w-1/2 mx-auto mt-10 mb-5" />
      </div>
      <div class="h-1/2 flex flex-col justify-evenly items-center px-4">
        <h1 class="text-info text-xl">Inicia sesión con</h1>

        <LoginButton platform="facebook" @login="handleGoogleLogin" />
        <LoginButton platform="google" @login="handleGoogleLogin" />
      </div>
    </div>
  </div>
</template>

<script>
import LoginButton from '@/components/LoginButton.vue';
export default {
  name: 'Login',

  components: {
    LoginButton,
  },

  methods: {
    handleGoogleLogin() {
      window.location.href = import.meta.env.VITE_API_URL + '/users/google-login';
    }
  },

  async created() {
    if (this.$route.name == 'LoginSuccess' && this.$route.query?.token){
      const token = this.$route.query.token;
      localStorage.setItem('token', token);
      this.$router.push('/home');
    }
  },
};
</script>

<style>
.login-container {
  background: linear-gradient(170deg, #65ba69 0%, #65ba69 50%, #eaedef 50%, #eaedef 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background: linear-gradient(170deg, #65ba69 0%, #65ba69 50%, #ffffff 50%, #eaedef 100%);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  width: 360px;
  height: 80vh;
}

.facebook-btn {
  background-color: #3b5998;
  color: white;
  border-radius: 0.375rem;
}

.google-btn {
  background-color: #db4437;
  color: white;
  border-radius: 0.375rem;
}

.login-btn-icon {
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
}
</style>
