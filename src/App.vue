<template>
  <router-view v-slot="{ Component, route }">
    <transition
      :name="route.meta.transitionName"
      mode="out-in"
    >
      <div ref="main" :key="route.path">
        <div id="nav" v-if="!splash" >
          <Nav :navSize="navSize"/>
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
        splash: this.$route.path === "/",
        navSize: "expanded",
        fire: true
      }
    },
    watch: {
      $route(to){
        this.splash = to.fullPath === "/" ? true : false
      }
    },
    methods:{
      handleScroll: function(){
        if (this.fire){
          if(window.scrollY > 0){
            this.navSize = "collapsed"
          } else {
            this.navSize = "expanded"
          }
          this.fire = false
        }
        setTimeout(()=>{
          this.fire = true
        }, 20)
      }
    },
    mounted() {
      this.interval = window.setInterval(this.handleScroll, 100)
    },
    unmounted(){
      clearInterval(this.interval)
    }
  }

</script>


<style lang="scss">

#nav {
  position: sticky;
  top: 0;
  padding: 2vh;
  background-color: $backgroundColor
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $backgroundColor
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
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
