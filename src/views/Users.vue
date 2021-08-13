<template>
  <div class="users">
    <Header/>
    <UsersTable
        v-if="users.length"
        :users="users"
        @user-avatar="openAvatarPopup"
    />
  </div>
  <AvatarPopup v-if="avatar"
               :avatar="avatar"
               @close-avatar="closeAvatarPopup"
  />
  <Spinner v-if="isLoading"/>
</template>

<script>
import Header from './../components/Header';
import UsersTable from './../components/UsersTable';
import AvatarPopup from './../components/AvatarPopup';
import Spinner from './../components/Spinner';

export default {
  name: 'Users',
  components: {
    Header,
    UsersTable,
    AvatarPopup,
    Spinner
  },
  data() {
    return {
      users: [],
      avatar: '',
      isLoading: true,
    }
  },
  methods: {
    openAvatarPopup(avatar) {
      this.avatar = avatar;
    },
    closeAvatarPopup() {
      this.avatar = '';
    },
    async getAllUsers() {
      const res = await fetch('api/users');
      if (!res.ok) {
        const message = `An error has occured: ${res.status}`;
        const err = await res.json();
        this.isLoading = false;
        alert(`${message} ${err.error}`)
        throw new Error(message);
      }
      const result = await res.json();
      this.isLoading = false;
      return result.data;
    }
  },
  created() {
    this.getAllUsers()
        .then(res => this.users = res)
        .catch(error => console.error(error))
  }
}
</script>

<style scoped>
.users {
  padding: 12px;
}
</style>