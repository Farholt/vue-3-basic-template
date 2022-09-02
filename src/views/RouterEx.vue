<template>
  <RouterEx />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

const RouterEx = defineAsyncComponent(() => import(/* webpackChunkName: "Home -> App" */ '@/components/RouterEx.vue'))

export default defineComponent({
  components: {
    RouterEx
  }
})
</script>
