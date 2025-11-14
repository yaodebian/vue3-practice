<template>
  <section>
    <h2>About（懒加载）</h2>
    <p>你现在访问了 /about，页面组件在此刻被编译并加载。</p>
    <p>返回 <router-link to="/">Home</router-link></p>
  </section>
</template>

<script>
export default { name: 'About' };
</script>

<style scoped>
section { margin-top: 20px; }
p { color: #555; }
</style>