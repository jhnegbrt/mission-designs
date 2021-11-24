<template>
  <div id="philosophy">
    <div>
      <div id="logo-definition">
        <h1>logos</h1>
        <Logos />
        <div>
          <p>(Greek: "word," "reason," or "plan") </p>
          <p>1. the root of logic</p>
          <p>2. "reasoned discourse" - Aristotle</p>
        </div>
      </div>
    </div>
    <div>
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

#philosophy{
  margin: 5vh 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height:100vh
}

#logo-definition{
  background-color:antiquewhite;
  padding:2vw;
}

</style>


