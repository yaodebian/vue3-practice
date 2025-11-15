<script setup lang="ts">
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
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
