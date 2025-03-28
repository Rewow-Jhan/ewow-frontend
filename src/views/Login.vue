<template>
  <div class="login-container absolute">
    <div class="login-box">
      <div class="h-1/2 flex justify-center items-center">
        <img src="../assets/images/Rewow-logo-white.png" alt="Logo" class="w-1/2 mx-auto mt-10 mb-5" />
      </div>
      <div class="h-1/2 flex flex-col justify-evenly items-center px-4">
        <h1 class="text-info text-xl">Inicia sesión con</h1>

        <button class="btn btn-xl btn-primary w-full facebook-btn relative">
          Facebook
          <div class="login-btn-icon absolute">
            <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff">
              <g stroke-width="0"></g>
              <g stroke-linecap="round" stroke-linejoin="round"></g>
              <g>
                <path
                  d="M1168.737 487.897c44.672-41.401 113.824-36.889 118.9-36.663l289.354-.113 6.317-417.504L1539.65 22.9C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l62.045-451.233H1126.66v-69.152c0-54.937 14.214-96.112 42.078-122.058"
                  fill-rule="evenodd"></path>
              </g>
            </svg>
          </div>
        </button>
        <button class="btn btn-xl btn-primary w-full google-btn relative" @click="handleGoogleLogin()">
          Google
          <div class="login-btn-icon absolute">
            <svg fill="#ffffff" height="24px" width="24px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" stroke="#ffffff">
              <g stroke-width="0"></g>
              <g stroke-linecap="round" stroke-linejoin="round"></g>
              <g>
                <g>
                  <path
                    d="M16,32C7.2,32,0,24.8,0,16S7.2,0,16,0c4.9,0,9.5,2.2,12.5,6c0.2,0.2,0.3,0.5,0.2,0.8c-0.1,0.3-0.3,0.5-0.5,0.7l-6.7,3.3 c-0.4,0.2-0.8,0.1-1.1-0.1c-1.5-1.3-2.8-1.8-4.3-1.8c-3.9,0-7.1,3.2-7.1,7.1s3.2,7.1,7.1,7.1c2,0,3.9-1.1,5.3-3.1H16 c-0.6,0-1-0.4-1-1v-5c0-0.6,0.4-1,1-1h15c0.5,0,0.9,0.4,1,0.8c0.1,0.6,0.1,1,0,1.5c0,0.2,0,0.4,0,0.7C32,24.8,24.8,32,16,32z">
                  </path>
                </g>
              </g>
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',

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
