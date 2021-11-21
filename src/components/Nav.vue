<template>
  <div id="inner-nav" :class="navSize">
    <img id="top-logo" alt="Mission Design" src="../assets/logo.png">
    <div id="nav-links">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: ["navSize"]
}
</script>

<style lang="scss">

.expanded{
  #top-logo {
    height: 12vh
  }
}

.collapsed{
  #top-logo {
    height: 5vh
  }
}

#inner-nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
}


#nav a {
  text-decoration: none;
  color: black;
  &:hover{
    text-decoration: underline;
  }
}

#nav a.router-link-exact-active {
  color: #008e97;
  text-decoration: underline;
}
</style>
