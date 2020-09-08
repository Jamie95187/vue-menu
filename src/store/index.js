import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [
      {
        imageUrl: '../assets/salmon-sashimi.png',
        id: '12312312312asd',
        title: 'Salmon Sashimi',
        description: 'A lovely fresh salmon sashimi - £8',
        price: 8,
        orders: 0,
        active: false
      },
      {
        imageUrl: '../assets/tuna-sashimi.jpg',
        id: '12312312312abd',
        title: 'Tuna Sashimi',
        description: 'A lovely fresh tuna sashimi - £7',
        price: 7,
        orders: 0,
        active: false
      },
      {
        imageUrl: '../assets/tuna-sashimi.jpg',
        id: '12312312312abe',
        title: 'Cod Sashimi',
        description: 'A lovely fresh Cod sashimi - £8',
        price: 8,
        orders: 0,
        active: false
      },
      {
        imageUrl: '../assets/salmon-sashimi.png',
        id: '12312312312asd',
        title: 'Sea Bream Sashimi',
        description: 'A lovely fresh Sea Bream sashimi - £8',
        price: 9,
        orders: 0,
        active: false
      }
    ],
    totalPrice: 0,
    orders: [
      {

      }
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload){
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    addDish (state, item) {
      for (var i = 0; i < state.menu.length; i++) {
        if (state.menu[i].title === item) {
          state.menu[i].orders++
          state.menu[i].active = true
        }
      }
      console.log("added dish!")
    },
    removeDish (state, item) {
      for (var i = 0; i < state.menu.length; i++) {
        if (state.menu[i].title === item) {
          state.menu[i].orders--
          if (state.menu[i].orders === 0) {
            state.menu[i].active = false
          }
        }
      }
      console.log("removed dish!")
    }
  },
  actions: {
    signUserUp({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              orders: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              orders: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
    },
    clearError ({commit}) {
      commit('clearError')
    },
    addDish ({commit}, item) {
      commit('addDish', item)
    },
    removeDish ({commit}, item) {
      commit('removeDish', item)
    }
  },
  getters: {
    loadedMenu (state) {
      return state.menu
    },
    user (state) {
      return state.user
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    totalPrice (state) {
      return state.totalPrice
    }
  }
})
