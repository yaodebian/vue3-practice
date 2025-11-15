<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

import { useCounterStore } from '@/stores/counter'
// 在组件内部的任何地方均可以访问变量 `store` ✨
const store = useCounterStore()

/* print initial value */
console.log(store.count)
console.log(store.doubleCount)

/* increment value after 3 seconds */
setTimeout(() => {
  store.increment()
  /* print updated value */
  console.log(store.count)
  console.log(store.doubleCount)
}, 3000)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
