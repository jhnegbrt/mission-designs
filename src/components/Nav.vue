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
      <router-link to="/philosophy">Philosophy</router-link>
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
  margin-left: .2vw;
}

#md-m{
  margin-left: .2vw;
}

#md-d,
#md-text{
  transition: transform 1s ease;
}


.expanded{
  #md-d{
    transform: translateY(20px);
  }

  #md-text{
    transform: translateY(20px);
  }
}


#inner-nav{
  font-family: $mainFont;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  transition: transform 1s ease
}


#nav a {
  text-decoration: none;
  color: $superDarkBlue;
  &:hover{
    text-decoration: underline;
  }
}

#nav-links a.router-link-exact-active {
  text-decoration: underline;
}
</style>
