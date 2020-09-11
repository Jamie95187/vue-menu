<template>
  <v-main>
    <v-layout>Order</v-layout>
    <v-divider></v-divider>
    <v-list v-for="item in orderItems" :key="item[0]">
      <v-list-item>
        <h3>{{ item[0] }} : {{ item[1] }} </h3>
      </v-list-item>
    </v-list>
  </v-main>
</template>

<script>
  export default {
    computed: {
      orderItems () {
        return this.$store.getters.loadedOrder
      }
    }
  }
</script>
