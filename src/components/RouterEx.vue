<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <div class="hello">
    <h1>Router Example /RouterEx</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
  </div>
  <br />
  <!-- LINK EXAMPLE -->
  <a-button link="link"><router-link to="/">Router Example (Look @ url)</router-link></a-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RouterEx'
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
