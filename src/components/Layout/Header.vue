<template>
  <v-layout>
    <v-navigation-drawer
      v-model="sideNav"
      absolute
      temporary
      >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <v-app-bar app class="primary">
        <router-link to="/" tag="span" style="cursor: pointer">
          <v-toolbar-title class="white--text">
            Sushi Menu
          </v-toolbar-title>
        </router-link>
        <v-app-bar-nav-icon
          @click.stop="sideNav = !sideNav"
          ></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn
          text class="white--text"
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left>
            {{ item.icon }}
          </v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn
          v-if="userIsAuthenticated"
          text class="white--text"
          key="Sign Out"
          to="/"
          @click="signOut()">
          <v-icon left>
            mdi-exit-to-app
          </v-icon>
            Sign Out
        </v-btn>
      </v-app-bar>
    </v-layout>
</template>

<script>
  export default {
    data: () => ({
      sideNav: false,
    }),
    // Show different page for authenticated vs unauthenticated users
    computed: {
      menuItems() {
        // default case when not logged in
        let menuItems = [
          { icon: 'face', title: 'Sign up', link: '/signup'},
          { icon: 'lock_open', title: 'Sign in', link: '/signin'},
          { icon: 'fastfood', title: 'Menu', link: '/'},
          { icon: 'mdi-basket', title: 'View Order', link: '/order'},
          { icon: 'mdi-history', title: 'Order History', link: '/orders'}
        ]
        // logged on user
        if (this.userIsAuthenticated) {
          menuItems = [
            { icon: 'fastfood', title: 'Menu', link: '/'},
            { icon: 'mdi-basket', title: 'View Order', link: '/order'},
            { icon: 'mdi-history', title: 'Order History', link: '/orders'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      signOut() {
        this.$store.dispatch('signUserOut')
      }
    }
  }

</script>
