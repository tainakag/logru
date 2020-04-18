<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <h1 class="title">
        Logru
      </h1>
      <h2 class="subtitle">
        Super Web App to log your work!
      </h2>
      <div class="log-message">
        <b-field label="Message">
          <b-input placeholder="猫のトイレ掃除した..." rounded></b-input>
        </b-field>
      </div>
      <div class="log-button">
        <b-button type="is-primary" size="is-large" rounded>
          <b-icon pack="fas" icon="angle-double-up"></b-icon>
          <span>ログる</span>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* text-align: center; */
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.log-button {
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
