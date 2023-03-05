<template>
  <router-view></router-view>
  <router-link to="/">Go back to home</router-link>
  <router-link to="/test-page">Go to test page</router-link>
</template>

<script lang="ts" setup>
  let str: string = 'Hello World'

  console.log(str)
</script>
