<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { debounce } from 'lodash'

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore()
    const pageStyle = computed(() => store.getters.getStyle)

    onMounted(() => {
      document.body.className = `page-style-${pageStyle.value}`
    })

    watch(
      pageStyle,
      debounce((val) => {
        document.body.className = `page-style-${pageStyle.value}`
      }, 500)
    )
  }
})
</script>

<style lang="scss">
body {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
}
</style>
