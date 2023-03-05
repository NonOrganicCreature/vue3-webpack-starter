<script lang="ts" setup>
  import { ref } from 'vue'

  const testRef = ref('Home page')
</script>
<template>
  <h1 class="w-[220px]">{{ testRef }}</h1>
</template>

<style lang="scss">
  h1 {
    font-size: 34px;
  }
</style>
