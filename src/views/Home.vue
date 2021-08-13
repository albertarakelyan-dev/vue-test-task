<template>
  <div class="home">
    <Header/>
    <div class="home-content">
      <h3>Hey, you logged in !</h3>
      <button class="btn log-out" @click="logOut">Logout</button>
    </div>
  </div>
</template>

<script>
import Header from './../components/Header';

export default {
  name: 'Home',
  components: {
    Header,
  },
  methods: {
    logOut() {
      localStorage.removeItem('accessToken');
      this.$router.push({name: 'Login'});
    }
  }
}
</script>

<style scoped>
.home {
  padding: 12px;
}

.home-content {
  width: max-content;
  display: flex;
  flex-direction: column;
  margin: 12px 35px 0 auto;
}

.home-content h3 {
  font-weight: bold;
  margin-top: 12px;
  float: right;
}

.home-content .log-out {
  margin: 0;
  border-radius: 0;
  background: unset;
  color: rgb(216, 45, 45);
}

</style>