<template>
  <div id="philosophy-container">
    <div id="logos-main">
        <Logos id="logos"/>
        <div id="logos-definition">
          <div>
            <h1>lo-gos</h1>
            <p>\LOH-gohs\</p>
            <p><i>n</i></p>
            <p>(greek; popularized by Heraclitus, Aristotle; referenced by Stoics)</p>
          </div>
          <p>1. the rationality in the human mind</p>
          <p>2. word, thought, principle, or speech</p>
          <p>3. "reasoned discourse" - Aristotle</p>
        </div>
      </div>
    <div id="philosophy">
      <h1>Logo-Centric Design</h1>
      <section>
        <p>Our development Philosophy - LogoCentric Design - is to start with the core and build inside out</p>
        <p>Whether we are designing a logo, building a marketing website, or architecting a full-scale web app, we take a
          no non-sense approach by <emphasized>starting with and sticking to your core Mission</emphasized>
        </p>
      </section>
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

#logos-main{
  width: 40vw;
  background-color:antiquewhite;
  padding:2vw;
  border-radius: 2vh;
  box-shadow: 0 1px 1px rgba(0,0,0,0.12), 
              0 2px 2px rgba(0,0,0,0.12), 
              0 4px 4px rgba(0,0,0,0.12), 
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
}

#logos{
  height: 15vh;
}

#logos-definition{
  background-color: white;
  width: 80%;
  border-radius: 1vh;
  text-align: left;
  margin: 0 auto;
  padding: 2vh;
  line-height: 3vh;

  div{
    h1{
      font-size: 3vh;
      font-weight: 550;
      display: inline;
    }

    p{
      display: inline;
      margin-left: .6vw
    }
  }

}

#philosophy{
  color: $superDarkBlue;
  width: 60vw;
  padding-left: 5vw;
  h1{
    font-size: 6vh;
    font-weight: 550;
  }

  section{
    background-color: white;
    margin-top: 2vh;
    padding: 2em;
    border-radius: 1vh
  }
}

</style>


