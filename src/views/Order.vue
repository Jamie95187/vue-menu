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
      }
    }
  }
</script>
