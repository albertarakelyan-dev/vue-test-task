<template>
  <form @submit="onSubmit($event)">
    <div class="form-control">
      <label for="email">Email</label>
      <input
          id="email"
          type="email"
          v-model.trim="user.email"
          name="email"
          autocomplete="off"
          placeholder="select email"
      />
      <p v-show="isRequiredEmail" class="error-message">Email is required</p>
      <p v-show="isValidEmail" class="error-message">Email isn't valid</p>
    </div>
    <div class="form-control">
      <label for="pass">Password</label>
      <input
          id="pass"
          type="password"
          v-model.trim="user.password"
          name="password"
          placeholder="select password"
      />
      <p v-show="isRequiredPassword" class="error-message">Password is required</p>
    </div>
    <div class="form-control">
      <button type="submit" class="btn btn-block btn-login">Login</button>
    </div>
    <div class="form-control form-control-check">
      <input type="checkbox" v-model="remember" id="remember" name="remember"/>
      <label for="remember">Remember me</label>
    </div>
  </form>
</template>

<script>

export default {
  name: 'LoginForm',
  props: ['isCancel'],
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      remember: false,
      isValidEmail: false,
      isRequiredEmail: false,
      isRequiredPassword: false,
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const {email, password} = this.user;
      const user = JSON.stringify({email, password});
      this.updateValidation();

      if (!this.remember) {
        localStorage.removeItem('user');
      }

      this.checkFormValid(email, password);

      if (!email || !password) {
        return
      }

      this.$emit('doLoading', true);

      if (this.remember) {
        localStorage.setItem('user', user);
      }
      await this.onLogin(user);
    },
    checkFormValid(email, password) {
      if (!email) {
        this.isRequiredEmail = true;
      } else if (!this.validEmail(email)) {
        this.isValidEmail = true;
      }

      if (!password) {
        this.isRequiredPassword = true;
      }
    },
    validEmail(email) {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
    async onLogin(user) {
      const res = await fetch('api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: user
      });
      this.$emit('doLoading', false);
      if (!res.ok) {
        const message = `An error has occured: ${res.status}`;
        const err = await res.json();
        alert(`${message} ${err.error}`)
        throw new Error(message);
      }
      const data = await res.json();
      localStorage.setItem('accessToken', JSON.stringify(data['token']));
      this.$router.push({name: 'Home'});
    },
    updateValidation() {
      this.isValidEmail = false;
      this.isRequiredEmail = false;
      this.isRequiredPassword = false;
    }
  },
  created() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user.email = user.email;
      this.user.password = user.password;
      this.remember = true;
    }
  },
  watch: {
    isCancel: function () {
      this.remember = false;
      this.user.email = '';
      this.user.password = '';
    }
  }
}
</script>

<style scoped>

form {
  padding: 12px 8px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  margin: 5px 0;
  padding: 10px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
}

.form-control-check label {
  margin: 0 8px;
}

.form-control-check input {
  width: 20px;
  height: 20px;
}

.btn-login {
  background: green;
}

.error-message {
  color: red;
  margin: 5px;
  font-size: 14px;
}
</style>