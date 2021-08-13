<template>
  <div class="user-table">
    <table>
      <Thead/>
      <Tbody
          :users="users"
          @user-avatar="sendAvatar"
      />
    </table>
  </div>
</template>

<script>
import Thead from './../components/Thead';
import Tbody from './../components/Tbody';

export default {
  name: 'UsersTable',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  components: {
    Thead,
    Tbody,
  },
  methods: {
    sendAvatar(avatar) {
      this.$emit('user-avatar', avatar);
    }
  },
}
</script>

<style scoped>
.user-table {
  overflow-x: auto;
  width: 100%;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed;
}

@media(max-width: 991px) {
  table {
    width: 1200px;
  }
}
</style>