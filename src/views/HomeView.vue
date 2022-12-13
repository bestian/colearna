<template>
  <div class="home">
    <div class="blue ui row">
      <img alt="text" class = "md" src="https://www.colearna.co/img/banner-home-parents-text.svg" />
      <img alt="logo" class = "lg" src="https://www.colearna.co/img/banner-home-parents-desktop.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
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

<style type="text/css" scoped>
  .md {
    width: 33vw;
    position: absolute;
    top: 6em;
    left: 3em;
  }

  .lg {
    position: absolute;
    right: 0;
    top: 0;
    width: 66vmin;
  }

  .blue {
    width: 100vw;
    height: 600px;
    position: relative;
    background-image: url(https://www.colearna.co/img/banner_home_class_desktop_background.jpg);
    background-color: #99f;
  }
</style>
