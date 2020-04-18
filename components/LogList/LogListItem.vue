<template>
  <div>
    <article class="media">
      <figure class="media-left">
        <p class="image is-64x64">
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small>
            <small>31m</small>
            <br />
            {{ message }}@{{ createdAtFormatted }}
          </p>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-reply"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-retweet"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fas fa-heart"></i></span>
            </a>
          </div>
        </nav>
      </div>
      <div class="media-right">
        <button class="delete"></button>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  //   props: {
  //     id: {
  //       type: Number,
  //       default: null,
  //       required: false
  //     },
  //     name: {
  //       type: String,
  //       default: '',
  //       required: false
  //     },
  //     message: {
  //       type: String,
  //       default: '',
  //       required: false
  //     },
  //     createdAt: {
  //       type: Date,
  //       default: new Date(),
  //       required: false
  //     }
  //   },
  props: {
    log: {
      type: Object,
      default: () => {},
      required: false
    }
  },
  data() {
    return {
      id: this.log.id,
      name: this.log.name,
      message: this.log.message,
      createdAt: this.log.createdAt
    }
  },
  computed: {
    createdAtFormatted() {
      return this.$dateFormat(this.createdAt, 'yyyy/MM/dd HH:mm:ss')
    }
  }
}
</script>
