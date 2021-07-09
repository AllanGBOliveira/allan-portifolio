<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about"><i class="bi-alarm" style="font-size: 2rem; color: cornflowerblue;"></i></router-link>
  </div> -->
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
  name: "App",

  components:{
    NavBar,
  }
}
</script>

