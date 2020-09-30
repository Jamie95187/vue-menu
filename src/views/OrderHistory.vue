<template>
  <v-main>
    <h2>Previous Order ({{this.$route.path.substring(7)}})</h2>
    <v-divider></v-divider>
    <v-list v-for="dish in order.Order" :key="dish[0]">
      <v-list-item>
        <h3>{{ dish[0] }} : {{ dish[1] }}</h3>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-layout>
      <h2> Total Price : {{order.Price}} </h2>
    </v-layout>
  </v-main>
</template>

<script>
  export default {
    computed: {
      order () {
        console.log(this.$store.getters.user)
        this.$store.dispatch('loadOrder', this.$route.path.substring(7))
        return this.$store.getters.loadedOrder
      }
    }
  }
</script>
