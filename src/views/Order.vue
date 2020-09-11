<template>
  <v-main>
    <v-layout>Order</v-layout>
    <v-divider></v-divider>
    <v-list>
      <v-list-item>
        
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
