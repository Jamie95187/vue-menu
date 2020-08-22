<template>
  <v-app>
    <v-content>
      <Header />
      <Menu/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Layout/Header.vue';
import Menu from './components/Menu';

export default {
  name: 'App',

  components: {
    Menu,
    Header
  },

  data: () => ({
    //
  }),
};
</script>
