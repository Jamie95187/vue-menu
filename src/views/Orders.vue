<template>
  <v-layout>
    <v-list v-for="order in orders" :key="order">
      <v-list-item>
        <h3>{{ order.Price }}</h3>
      </v-list-item>
    </v-list>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      orders () {
        this.$store.dispatch('loadOrders')
        return this.$store.getters.loadOrders
      }
    }
  }
</script>
