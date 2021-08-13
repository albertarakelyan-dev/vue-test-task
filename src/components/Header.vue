<template>
  <header>
    <ul>
      <li>
        <router-link class="btn link active" :to="{name: 'Home'}">Home</router-link>
      </li>
      <li>
        <router-link class="btn link" :to="{name: 'Users'}">Users</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
header {
  width: 100%;
}

header {
  border-bottom: 1px solid #6c757d;
}

header ul {
  display: inline-block;
}

ul li {
  margin: 0 2px;
  display: inline-block;
}

.link {
  color: #6c757d;
  background: #eaeaea;
  margin: 0;
  border-radius: 0;
}

.link:hover {
  color: #fff;
  background: #007bff;
}

.router-link-active {
  color: #fff;
  background: #007bff;
}
</style>