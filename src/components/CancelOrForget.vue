<template>
  <div class="cancel-or-forget">
    <button class="btn btn-cancel" @click="cancel()">Cancel</button>
    <span>
      Forget
      <router-link :to="'/home'">password?</router-link>
    </span>
  </div>
</template>

<script>

export default {
  name: 'CancelOrForget',
  methods: {
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style scoped>
  .cancel-or-forget {
    background: #e6e4e4;
    padding: 22px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: #1e1ee3;
  }
</style>