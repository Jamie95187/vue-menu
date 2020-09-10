import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: [
      {
        imageUrl: '../assets/salmon-sashimi.png',
        id: '1',
        title: 'Salmon Sashimi',
        description: 'A lovely fresh salmon sashimi - £8',
        price: 8,
        orders: 0,
        active: false
      },
      {
        imageUrl: '../assets/tuna-sashimi.jpg',
        id: '2',
        title: 'Tuna Sashimi',
        description: 'A lovely fresh tuna sashimi - £7',
        price: 7,
        orders: 0,
        active: false
      },
      {
        imageUrl: '../assets/tuna-sashimi.jpg',
        id: '3',
        title: 'Cod Sashimi',
        description: 'A lovely fresh Cod sashimi - £8',
        price: 8,
        orders: 0,
        active: false
      },
      {
        imageUrl: '../assets/salmon-sashimi.png',
        id: '4',
        title: 'Sea Bream Sashimi',
        description: 'A lovely fresh Sea Bream sashimi - £8',
        price: 9,
        orders: 0,
        active: false
      }
    ],
    totalPrice: 0,
    currentOrder: [],
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
    },
    updateOrderAdd (state, item) {
      let contain = false
      let idx = 0
      for (var i = 0; i < state.currentOrder.length; i++) {
        if (state.currentOrder[i][0] === item) {
          contain = true
          idx = i
        }
      }
      if (contain === true) {
        console.log('Added')
        state.currentOrder[idx][1]++
      } else {
        state.currentOrder.push([item, 1])
      }
      console.log(state.currentOrder)
    },
    updateOrderRemove (state, item) {
      for (var i = 0; i < state.currentOrder.length; i++) {
        if (state.currentOrder[i][0] === item) {
          state.currentOrder[i][1]--
          if (state.currentOrder[i][1] === 0) {
            state.currentOrder.splice(i)
          }
        }
      }
      console.log(state.currentOrder)
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
      commit('updateOrderAdd', item)
    },
    removeDish ({commit}, item) {
      commit('removeDish', item)
      commit('updateOrderRemove', item)
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
