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
      this.$router.push('/home')
    }
  }

}


</script>

<style lang="scss" scoped>

#splash{
  height: 100vh;
  font-family: $mainFont;
}

</style>