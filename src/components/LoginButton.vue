<template>
  <button 
    class="btn btn-xl btn-primary w-full relative" 
    :class="isGoogle ? 'google-btn' : 'facebook-btn'"
    @click="handleLogin()"
  >
    {{ isFacebook ? 'Facebook' : 'Google' }}
    <div class="login-btn-icon absolute">
      <img :src="isGoogle ? googleIcon : facebookIcon" alt="Login Icon" width="24" height="24" />
    </div>
  </button>
</template>

<script>
import facebookIcon from '@/assets/icons/facebook.svg';
import googleIcon from '@/assets/icons/google.svg';

export default {
  name: 'LoginButton',
  props: {
    platform: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      facebookIcon,
      googleIcon,
    }
  },
  computed: {
    isGoogle() {
      return this.platform === 'google';
    },
    isFacebook() {
      return this.platform === 'facebook';
    },
  },
  methods: {
    handleLogin() {
      this.$emit('login');
    },
  },
};
</script>

<style>
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
