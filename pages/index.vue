<template>
  <div class="container">
    <div>
      <div class="format-date">{{ now | moment }}</div>
      <div class="monologue">
        あなたがこなしたタスクをログとして残しましょう。
      </div>
      <div class="log-form columns">
        <div class="log-message column is-four-fifths">
          <b-field>
            <b-input placeholder="猫のトイレ掃除した..." rounded></b-input>
          </b-field>
        </div>
        <div class="log-button column">
          <b-button type="is-primary" rounded>
            <span>ログる</span>
            <b-icon pack="fas" icon="angle-double-up"></b-icon>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      now: new Date(),
      timerId: undefined
    }
  },
  mounted() {
    this.timerId = setInterval(this.fetchTime, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timerId)
  },
  methods: {
    fetchTime() {
      this.now = new Date()
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  // align-items: center;
  text-align: center;
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

.monologue {
  font-weight: 200;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.log-form {
  .column {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
  }
}

.format-date {
  padding-top: 15px;
  padding-bottom: 15px;
  display: block;
  font-weight: 300;
  font-size: 60px;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
