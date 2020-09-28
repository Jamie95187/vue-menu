<template>
  <v-app>
    <v-main>
      <Header/>
      <v-layout>
        <v-flex>
          <router-view />
        </v-flex>
      </v-layout>
      <Menu/>
    </v-main>
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
