<template>
  <div @click="enterSite()" id="splash">
    <img alt="Mission Design" src="../assets/logo.png">
    <h3>Click To Enter!</h3>
  </div>


</template>

<script>
export default {
  methods:{
    enterSite(){
      debugger
      this.$router.push('/home')
    }
  }

}


</script>

<style>

#splash{
  height: 100vh
}

</style>