<template>
  <v-app>
    <Header/>
    <v-content>
      <v-layout>
        <v-flex>
          <router-view />
        </v-flex>
      </v-layout>
      <Menu/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },

};
</script>
