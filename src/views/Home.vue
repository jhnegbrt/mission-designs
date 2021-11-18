<template>
  <Nav />
  <div class="home">
    <img alt="Mission Design" src="../assets/logo.png">
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Main,
    Nav
  }
}
</script>
