<template>
  <div>
    <div id="nav">
      <router-link to="/">BLOCK</router-link>|
      <router-link to="/about">LIST</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
