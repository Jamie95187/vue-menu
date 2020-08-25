<template>
  <v-container grid-list-md>
    <h1>Menu</h1>
    <v-layout v-for="menuItem in menuItems" :key="menuItem.id">
      <v-col
        v-for="k in 3"
        :key="k"
        >
        <v-card class="ma-3">
            <v-card-text>
              <h3>{{ menuItem.title }}</h3>
            </v-card-text>
            <v-row >
              <v-col class="pl-10">
                <v-img
                  height="200"
                  width="200"
                  src="../assets/salmon-sashimi.png"
                ></v-img>
              </v-col>
              <v-col class="pl-0 text-center">
                <v-row class="flex-column ma-0 fill-height">
                  <v-col class="px-0">
                    <v-btn @click="updateOrder()" icon>
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col>
                    <v-btn @click="updateOrder()" icon>
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-card-text>
              <div class="text--primary">
                {{ menuItem.description }}
              </div>
            </v-card-text>
        </v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      price: 0,
      order: ({

      })
    }),
    computed: {
      menuItems () {
        return this.$store.getters.loadedMenu
      }
    },
    methods: {
      updateOrder(item) {
        console.log(item)
        console.log("hello")
      }
    }
  }
</script>
