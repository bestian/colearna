<template>
  <nav class="ui menu">
    <router-link to="/" class="item">家長</router-link>
    <router-link to="/" class="item">課程</router-link>
    <router-link to="/" class="item">老師</router-link>
    <router-link to="/" class="item">最新消息</router-link>
    <router-link to="/" class="item">關於我們</router-link>
    <router-link to="/" class="item">聯絡我們</router-link>
    <div class="right menu">
      <div class="item ui form">
        <div class="ui icon input">
          <input type="text" placeholder="Search..." v-model="myKey">
          <i class="search icon"></i>
        </div>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script type="text/javascript">

  export default {
    name: 'App',
    data () {
      return {
        myKey: ''
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

nav {
  a {
    font-weight: bold;
    color: gray;
    &.router-link-exact-active {
      color: black;
    }
  }
}
</style>
