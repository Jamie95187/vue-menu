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
        description: 'A lovely fresh Sea Bream sashimi - £9',
        price: 9,
        orders: 0,
        active: false
      }
    ],
    totalPrice: 0,
    currentOrder: [],
    orders: [],
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
          state.totalPrice = state.totalPrice + state.menu[i].price
        }
      }
    },
    removeDish (state, item) {
      for (var i = 0; i < state.menu.length; i++) {
        if (state.menu[i].title === item) {
          state.menu[i].orders--
          state.totalPrice = state.totalPrice - state.menu[i].price
          if (state.menu[i].orders === 0) {
            state.menu[i].active = false
          }
        }
      }
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
        state.currentOrder[idx][1]++
      } else {
        state.currentOrder.push([item, 1])
      }
    },
    updateOrderRemove (state, item) {
      for (var i = 0; i < state.currentOrder.length; i++) {
        if (state.currentOrder[i][0] === item) {
          state.currentOrder[i][1]--
          if (state.currentOrder[i][1] === 0) {
            state.currentOrder.splice(i,i)
          }
        }
      }
    },
    clearOrder (state) {
      state.currentOrder = [];
      state.totalPrice = 0;
      for (var i = 0; i < state.menu.length; i++){
        state.menu[i].orders = 0
        state.menu[i].active = false
      }
    },
    loadOrders (state, orders) {
      state.orders = orders
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
    },
    submitOrder ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('orders/').push({
        User: this.state.user,
        Order: this.state.currentOrder,
        Price: this.state.totalPrice
      },
      function(error) {
        if (error) {
          console.log(error)
        } else {
          commit('clearOrder')
          console.log("Successfully posted order")
          commit('setLoading', false)
        }
      })
    },
    loadOrders ({commit}) {
      let orders = [];
      firebase.database().ref('orders/').on("value", function(snapshot) {
        for (const [key] of Object.entries(snapshot.val())) {
          orders.push(key)
        }
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      })
      commit('loadOrders', orders)
    },
    // loadOrder ({commit}) {
    //
    // }
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
    },
    loadedCurrentOrder (state) {
      return state.currentOrder
    },
    loadOrders (state) {
      return state.orders
    },
    loadOrder (state) {
      return state.order
    }
  }
})
