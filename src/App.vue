<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :name="route.meta.transitionName"
      mode="out-in"
    >
      <div :key="route.path">
        <div v-if="!splash" >
          <Nav />
        </div>
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
</template>


<script>

  import Nav from './components/Nav.vue'

  export default{
    components: {
      Nav
    },
    data: function() {
      return {
        splash: this.$route.path === "/"
      }
    },
    watch: {
      $route(to){
        this.splash = to.fullPath === "/" ? true : false
      }
    }
  }

</script>


<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter{
  display: none;
}

.fade-enter,
.fade-leave-active{
  transition-timing-function: ease;
  transition-duration: 1s;
  opacity: 0
}

.fade-enter-active{
  display: block
}

.fade-enter-active,
.fade-leave{
  transition-timing-function: ease;
  transition-duration: 1s;
  opacity: 1;
}

</style>
