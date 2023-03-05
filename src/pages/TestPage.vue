<script lang="ts" setup>
  import { defineAsyncComponent, onBeforeMount } from 'vue'
  import { useTestStore } from '../store/test'
  const LazyComponent = defineAsyncComponent(
    () =>
      import(
        /* webpackChunkName: "LazyComponent" */ '../components/LazyComponent.vue'
      )
  )

  const store = useTestStore()

  onBeforeMount(async () => {
    const { f } = await import(
      /* webpackChunkName: "LazyTS" */ '../assets/shared/lazyTSModule'
    )
    f()
  })
</script>
<template>
  <h1>{{ store.state.test }}</h1>
  <LazyComponent />
</template>
<style lang="scss">
  h2 {
    font-size: 34px;
  }
</style>
