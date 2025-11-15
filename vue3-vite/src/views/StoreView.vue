<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<template>
  <div class="store-view">
    <h2>Counter Store</h2>
    <div class="display-area">
      <p>Count: {{ counterStore.count }}</p>
      <p>Double Count: {{ counterStore.doubleCount }}</p>
    </div>
    <button @click="counterStore.increment()">Increment</button>
  </div>
</template>

<style scoped>
.store-view {
  padding: 20px;
  text-align: center;
}

.display-area {
  margin: 20px 0;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.display-area p {
  margin: 10px 0;
  font-size: 18px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
