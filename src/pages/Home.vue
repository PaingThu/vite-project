<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Content from '/src/components/Content.vue'

import Nav from '/src/components/Nav.vue'
</script>

<template>
  <Nav msg="V3.V.T "/>

  <div class="banner">
  <img alt="Vue logo" src="/src/assets/logo.png" />
  <img alt="Vue logo" src="/src/assets/vite.jpg" />
  <img alt="Vue logo" src="/src/assets/ts.png" />
  </div>
  
  <Content msg="Hello Vue 3 + Vite + TypeScript" />
</template>

<style>
body{
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app .banner{
    padding: 5em;
}
#app .banner img{
    height: 200px;
    padding: 0 1em;
}
</style>
