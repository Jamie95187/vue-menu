<template>
  <v-layout>
    <v-row
      align="center"
      justify="center">
      <v-list v-for="order in orders"
        :key="order"
        >
        <v-list-item>
          <v-btn :to="/order/ + order">{{order}}</v-btn>
        </v-list-item>
      </v-list>
    </v-row>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      orders () {
        if (!this.$store.getters.user) {
          this.$store.dispatch('clearOrders')
        }
        this.$store.dispatch('loadOrders')
        return this.$store.getters.loadOrders
      }
    }
  }
</script>
