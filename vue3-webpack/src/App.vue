<template>
  <div id="app">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <main>
      <div class="content">
        <p>{{ message }}</p>
        <button @click="incrementCounter">点击次数: {{ counter }}</button>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const title = ref('Vue3 Webpack 应用');
    const message = ref('欢迎使用Vue3和Webpack构建的应用！');
    const counter = ref(0);

    const incrementCounter = () => {
      counter.value++;
    };

    return {
      title,
      message,
      counter,
      incrementCounter
    };
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  background: white;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  max-width: 500px;
  width: 90%;
}

header {
  margin-bottom: 30px;
}

h1 {
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.content {
  margin-top: 20px;
}

p {
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 25px;
  line-height: 1.6;
}

button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

button:active {
  transform: translateY(0);
}
</style>