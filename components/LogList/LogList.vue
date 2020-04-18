<template>
  <div>
    <ul>
      <li v-for="log in orderedLogsByIdDesc" :key="log.id" class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <LogListItem :log="log" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import LogListItem from '@/components/LogList/LogListItem'
export default {
  components: {
    LogListItem
  },
  props: {
    logs: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      //   logs: []
    }
  },
  computed: {
    orderedLogsByIdDesc() {
      return this.logs.slice().reverse()
    }
  },
  mounted() {},
  methods: {}
}
</script>
