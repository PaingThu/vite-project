<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
    <nav>
        <span class="logo">{{msg}}</span>
        <span class="pages">
            <router-link to="./">Home</router-link>
            <router-link to="./vue3">Vue3</router-link>
            <router-link to="./vite">Vite</router-link>
            <router-link to="./typescript">TypeScript</router-link>
        </span>
    </nav>

  
</template>

<style scoped>
nav {
    display: flex;
    border-bottom: 1px solid gray;
    padding: 1em;
    background: #666;
    color: white;
}
nav span.logo {
    font-size: 1.5em;
}
nav span.pages{
    margin-left: auto;
}
nav span.pages a{
    text-decoration: none;
    padding: 0 1em;
}


a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
