<template>
  <v-layout>
    <h4> {{order.Price}} </h4>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      order () {
        this.$store.dispatch('loadOrder', this.$route.path.substring(7))
        return this.$store.getters.loadedOrder
      }
    }
  }
</script>
