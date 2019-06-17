import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:8000/api'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('localtoken') || null,
    usuario:'',
  },
  getters: {
    control(state) {
      return state.token !== null
    },
  },
  mutations: {
    cargaUsuario(state, usuario){
      state.usuario = usuario
    },
    loginToken(state, token) {
      state.token = token
    },
    logoutToken(state) {
      state.token = null
    },
  },
  actions: {
    loginToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/login', {
          email: credentials.email,
          password: credentials.password,
        })
          .then(response => {
            const token = response.data.token
            localStorage.setItem('localtoken', token)
            context.commit('loginToken', token)
            context.dispatch('profile')
            resolve(response)
             console.log(response)
             
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
        })
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/register', {
          name: data.name,
          email: data.email,
          password: data.password,
        })
          .then(response => {
            resolve(response)
            console.log(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    logoutToken(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      
      if (context.getters.control) {
        return new Promise((resolve, reject) => {
          axios.post('/logout')
            .then(response => {
              localStorage.removeItem('localtoken')
              context.commit('logoutToken')
              resolve(response)
              console.log(response);
              
            })
            .catch(error => {
              localStorage.removeItem('localtoken')
              context.commit('logoutToken')
              reject(error)
            })
        })
      }
    },
    profile(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      if (context.getters.control) {
        return new Promise((resolve, reject) => {
          axios.get('/profile')
            .then(response => {
             const usuario = response.data.name            
              context.commit('cargaUsuario', usuario)
              resolve(response)
            console.log(usuario);
            })
            .catch(error => {
              reject(error)
            })
        })
      }
    },
  }
})
