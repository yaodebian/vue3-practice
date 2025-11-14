<template>
  <section>
    <h2>Home</h2>
    <p>这是首页，已随入口一起编译。</p>
    <p>
      访问 <router-link to="/about">About</router-link> 时，才会触发按需编译。
    </p>
  </section>
</template>

<script>
export default { name: 'Home' };
</script>

<style scoped>
section { margin-top: 20px; }
p { color: #555; }
</style>