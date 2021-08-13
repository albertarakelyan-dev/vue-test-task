<template>
  <thead>
    <tr>
      <th>full name</th>
      <th>last name</th>
      <th>email</th>
      <th>avatar</th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'Thead'
}
</script>

<style scoped>
thead tr {
  background-color: #f7f7f7;
}

th {
  padding: 8px;
  text-align: left;
  border: 1px solid #dddddd;
}
</style>