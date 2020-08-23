<template>
  <v-container grid-list-md>
    <h1>Menu</h1>
    <v-layout>
      <v-card class="ma-3">
          <v-card-text>
            <h3>Salmon Sashimi</h3>
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
              A lovely fresh salmon sashimi - £8
            </div>
          </v-card-text>
      </v-card>
      <v-card class="text-xs-center ma-3">
          <v-card-text>
            <h3>Tuna Sashimi</h3>
          </v-card-text>
          <v-row justify="space-between">
            <v-col class="pl-10">
              <v-img
                height="200"
                width="200"
                src="../assets/tuna-sashimi.jpg"
              ></v-img>
            </v-col>
            <v-col class="text-center pl-0" >
              <v-row class="flex-column ma-0 fill-height" >
                <v-col>
                  <v-btn @click="updateOrder(logme($event))" icon>
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-col>
                <v-col class="px-0">
                  <v-btn @click="updateOrder()" icon>
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-card-text>
            <div class="text--primary">
              A lovely fresh tuna sashimi - £7
            </div>
          </v-card-text>
      </v-card>
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
    methods: {
      updateOrder(item) {
        console.log(item)
        console.log("hello")
      }
    }
  }
</script>
