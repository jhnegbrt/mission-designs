<template>

  <router-view v-slot="{ Component }">
    <transition
      name="fade"
      mode="out-in"
      appear
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <transition

  >
    <router-view :key="$route.fullPath"/>
  </transition> -->
</template>
<style>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
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

/* .fade-enter-active,
.fade-leave-active {
  transition-duration: 1s;
  transition-property: opacity;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
} */

</style>
