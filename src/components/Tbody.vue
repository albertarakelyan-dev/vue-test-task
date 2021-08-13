<template>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.first_name }}</td>
      <td>{{ user.last_name }}</td>
      <td>{{ user.email }}</td>
      <td>
        <img
            @click="openPopup($event, user)"
            :src="user['avatar']" :alt="user['first_name']">
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'Tbody',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  methods: {
    openPopup(e, user) {
      e.stopPropagation();
      this.$emit('user-avatar', user['avatar'])
    }
  }
}
</script>

<style scoped>
td {
  color: #6c757d;
  padding: 8px;
  text-align: center;
  border: 1px solid #dddddd;
  vertical-align: middle;
}

tr:nth-child(even) {
  background-color: #f7f7f7;
}

img {
  width: 50px;
  height: 50px;
  border: 2px solid #ccc;
  padding: 0 6px;
  background: #fff;
  object-fit: cover;
  cursor: pointer;
}
</style>