<template>
  <div>
    <div class="log-form-container container">
      <div>
        <div>
          <div class="format-date">
            <small>{{ formattedDate }}</small>
          </div>
          <div class="format-time">
            <strong>{{ formattedTime }}</strong>
          </div>
        </div>
        <div class="monologue">
          あなたがこなしたタスクをログとして残しましょう。
        </div>
        <div class="log-form columns">
          <div class="log-message column is-four-fifths">
            <b-field
              :type="isValid ? '' : 'is-danger'"
              :message="isValid ? '' : 'ログメッセージを入力してください'"
            >
              <b-input
                v-model="message"
                placeholder="猫のトイレ掃除した..."
                rounded
              ></b-input>
            </b-field>
          </div>
          <LogAddButton @addLog="addLog" />
          <!-- <div class="log-button column">
            <b-button type="is-primary" rounded>
              <span>ログる</span>
              <b-icon pack="fas" icon="angle-double-up"></b-icon>
            </b-button>
          </div> -->
        </div>
      </div>
    </div>
    <div class="log-list-container container">
      <div>
        <div class="log-list">
          <LogList :logs="logs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogList from '@/components/LogList/LogList'
import LogAddButton from '@/components/Buttons/LogAddButton'

export default {
  components: {
    LogList,
    LogAddButton
  },
  data() {
    return {
      now: new Date(),
      message: '',
      timerId: undefined,
      logs: [],
      isValid: true
    }
  },
  computed: {
    formattedDate() {
      return this.$dateFormat(this.now, 'yyyy年MM月dd日')
    },
    formattedTime() {
      return this.$dateFormat(this.now, 'HH:mm:ss')
    },
    id() {
      return 1
    }
  },
  mounted() {
    this.timerId = setInterval(this.fetchTime, 100)
    this.fetchLogs()
  },
  beforeDestroy() {
    clearInterval(this.timerId)
  },
  methods: {
    fetchTime() {
      this.now = new Date()
    },
    fetchLogs() {
      this.logs = [
        {
          id: 1,
          name: 'task1',
          message: 'msg1',
          createdAt: new Date()
        },
        {
          id: 2,
          name: 'task2',
          message: 'msg2',
          createdAt: new Date()
        }
      ]
    },
    validateLog() {
      if (this.message === '') {
        this.isValid = false
      } else {
        this.isValid = true
      }
    },
    addLog() {
      this.validateLog()
      if (this.isValid) {
        const newId = this.logs.length + 1
        this.logs.push({
          id: newId,
          name: 'task' + newId,
          message: this.message,
          createdAt: new Date()
        })
        this.message = ''
      } else {
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  padding-bottom: 20px;
}
.log-form-container {
  margin: 0 auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

.log-list-container {
  margin: 0 auto;
  min-height: 50vh;
  display: auto;
  justify-content: center;
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

.log-list {
  .column {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
  }
}

.format-date {
  padding-top: 15px;
  display: block;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 1px;
}
.format-time {
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
