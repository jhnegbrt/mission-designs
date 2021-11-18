<template>
  <div>
    <Nav />
    <div class="home">
      <img alt="Mission Design" src="../assets/logo.png">
      <Main />
    </div>
  </div>
</template>

<script>

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
