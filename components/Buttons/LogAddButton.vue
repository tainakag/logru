<template>
  <div class="log-button column">
    <b-button @click="addLog" type="is-primary" rounded>
      <span>ログる</span>
      <b-icon pack="fas" icon="angle-double-up"></b-icon>
    </b-button>
  </div>
</template>
<script>
export default {
  methods: {
    addLog() {
      console.log('add log')
      this.$emit('addLog')
    }
  }
}
</script>
