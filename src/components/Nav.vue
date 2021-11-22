<template>
  <div id="inner-nav" :class="navSize">
    <div id="nav-logo">
      <div>
        <img id="md-m" alt="Mission Design" src="../assets/m.png">
        <img id="md-d" alt="Mission Design" src="../assets/d.png">
      </div>
      <img id="md-text" alt="Mission Design" src="../assets/text.png">
    </div>
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

#nav-logo{
  display: flex;
  flex-direction: column;
  position: relative;
}


#md-d,
#md-m{
  height:10vh
}

#md-d{
  margin-left: .2vw
}

#md-m{
  margin-left: .2vw
}


.expanded{
  #md-d{
    transform: translateY(20px);
  }

  #md-text{
    transform: translateY(20px);
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
