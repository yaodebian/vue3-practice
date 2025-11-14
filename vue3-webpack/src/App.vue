<template>
  <div id="app">
    <header>
      <h1>按需编译 Demo（Webpack5 + Vue3）</h1>
      <nav class="nav">
        <router-link to="/">Home</router-link>
        <span> | </span>
        <router-link to="/about">About（懒加载）</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
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

.nav { margin-top: 10px; }
.nav a { color: #333; text-decoration: none; }
.nav a.router-link-active { font-weight: bold; }
</style>