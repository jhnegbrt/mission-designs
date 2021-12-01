<template>
  <div id="philosophy-container">
    <div id="logo-definition">
        <Logos id="logos"/>
        <h1>logos</h1>
        <div>
          <p>(Greek: "word," "reason," or "plan") </p>
          <p>1. the root of logic</p>
          <p>2. "reasoned discourse" - Aristotle</p>
        </div>
      </div>
    <div id="philosophy">
      <h1>Logo-Centric Design</h1>
      <p>Our development Philosophy - LogoCentric Design - is to start with the core and build inside out</p>
    </div>
  </div>
</template>

<script>

import Logos from "../assets/Logos.vue"

export default {
  name: 'Philosophy',
  components: {
    Logos
  }
}


</script>

<style lang="scss">

#philosophy-container{
  margin: 5vh 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height:50vh
}

#logo-definition{
  background-color:antiquewhite;
  padding:2vw;
}

#logos{
  // transform: scale(.4);
}

</style>


