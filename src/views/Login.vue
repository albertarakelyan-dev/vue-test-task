<template>
  <div class="login">
    <img src="./../assets/images/bugs-bunny.png" alt="bugs-bunny">
    <div class="form">
      <LoginForm
          :isCancel="isCancel"
          @doLoading="onLoading"
      />
      <CancelOrForget @cancel="onCancel"/>
    </div>
    <Spinner v-if="isLoading"/>
  </div>
</template>

<script>
import LoginForm from './../components/LoginForm';
import CancelOrForget from './../components/CancelOrForget';
import Spinner from './../components/Spinner';

export default {
  name: "Login",
  components: {
    LoginForm,
    CancelOrForget,
    Spinner
  },
  data() {
    return {
      isCancel: false,
      isLoading: false
    }
  },
  methods: {
    onLoading(loading) {
      this.isLoading = loading;
    },
    onCancel() {
      this.isCancel = true;
    }
  }
};
</script>

<style scoped>
.login {
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
}

.form-control-cancel {
  background: #ccc;
}

img {
  width: 100%;
  flex: 1;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1 1 400px;
}
</style>