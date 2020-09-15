<template>
  <v-main>
    <v-layout>
      <h2>Order</h2>
    </v-layout>
    <v-divider></v-divider>
    <v-list v-for="item in orderItems" :key="item[0]">
      <v-list-item>
        <h3>{{ item[0] }} : {{ item[1] }} </h3>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <h2>Total Price {{ totalPrice }}</h2>
    <v-divider></v-divider>
    <v-row class="ma-3">
      <v-column>
        <v-btn @click="submitOrder(orderItems)" :disabled="loading || orderItems.length === 0" :loading="loading" class="mx-3">
          Check Out
        </v-btn>
      </v-column>
      <v-column>
        <v-btn :disabled="loading" :loading="loading">
          Cancel Order
        </v-btn>
      </v-column>
    </v-row>
  </v-main>
</template>

<script>
  export default {
    computed: {
      orderItems () {
        return this.$store.getters.loadedOrder
      },
      totalPrice () {
        return this.$store.getters.totalPrice
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      submitOrder (order) {
        this.$store.dispatch('submitOrder', order)
      }
    }
  }
</script>
