<script lang="ts" setup>
  import { ref } from 'vue'
  const testRef = ref('Lazy component')
</script>
<template>
  <div>{{ testRef }}</div>
  <img src="/images/cloud2.png" alt="" />
</template>
