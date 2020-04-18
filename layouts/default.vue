<template>
  <div>
    <header>
      <AppNavigation />
    </header>
    <hr />
    <nuxt />
    <hr />
    <footer>
      footer
    </footer>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation'
export default {
  components: {
    AppNavigation
  }
}
</script>
<style lang="scss">
.hero {
  .hero-body {
    .container {
      .subtitle {
        font-weight: bold;
        display: inline;
      }
    }
  }
}
</style>
