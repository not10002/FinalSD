<template>
  <div class="home">
    <div class="navbar">
    <ul style="float: left" ><img src="../assets/ais_logo.jpg" alt="ais"></ul>
    <ul style="float: center;"><input type="text" placeholder="Search.."></ul>
  </div>
    <HelloWorld />
    <div>
        <router-link :to="{ path: '/about' }"><button type="button">ลงทะเบียนจองคิว - Register</button></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
body {margin:0;}
.navbar {
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  margin-bottom: 10px;
  width: 100%;
}
.main {
  padding: 16px;
  margin-top: 30px;
  height: 1500px; /* Used in this example to enable scrolling */
}
</style>
© 2022 GitHub, Inc.
