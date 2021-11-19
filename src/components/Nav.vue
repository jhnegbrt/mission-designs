<template>
  <div id="nav" :class="navSize">
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
  methods: {
    checkScrollPosition: function(){

    }
  }
  // created: function(){
  //   window.addEventListener("scroll", this.checkScrollPosition)
  // },
  // destroyed: function(){
  //   window.removeEventListener("scroll", this.checkScrollPosition)
  // }
}
</script>

<style lang="scss">

.expanded{
  #top-logo {
    height: 12vh
  }
}

.collapse{
  #top-logo {
    height: 5vh
  }
}

#nav {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2vh;
  background-color: white;
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
