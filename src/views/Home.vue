<template>
  <App />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

const App = defineAsyncComponent(() => import(/* webpackChunkName: "Home -> App" */ '@/components/HelloWorld.vue'))

export default defineComponent({
  components: {
    App
  }
})
</script>
