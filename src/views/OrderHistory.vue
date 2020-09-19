<template>
  <div>
    Order
  </div>
</template>

<script>
  export default {
    computed: {
      order () {
        return this.$store.dispatch('loadOrder')
      }
    }
  }
</script>
