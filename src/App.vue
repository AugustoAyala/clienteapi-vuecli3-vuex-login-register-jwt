<template>
  <div id="app">
      <nav class="navbar navbar-dark bg-warning mb-3"> 
           <ul>
                <li class="navbar-brand"> <router-link to="/">Home</router-link> </li>
                <li class="navbar-brand" v-if="!control"> <router-link to="/login">Login</router-link></li>
                <li class="navbar-brand" v-if="!control"> <router-link to="/register">Register</router-link></li>
                <li class="navbar-brand" v-if="control">{{$store.state.usuario}}</li>
                <li class="navbar-brand" v-if="control"> <button class="btn btn-light " @click="logout">Logout</button></li>
          </ul>
      </nav> 
      <router-view/>
  </div>
</template>
<script>
export default {
  computed: {
    control() {
      return this.$store.getters.control
    }
  },
  methods:{
  logout() {
    this.$store.dispatch('logoutToken')
  }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
