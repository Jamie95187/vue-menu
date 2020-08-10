<template>
  <v-container grid-list-md>
    <h1>Menu</h1>
    <v-layout>
      <v-card d-inline-block class="mx-auto">
          <v-card-text>
            <h3>Salmon Sashimi</h3>
          </v-card-text>
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-img
                height="200"
                width="200"
                src="../assets/salmon-sashimi.png"
              ></v-img>
            </v-col>

            <v-col
              cols="auto"
              class="text-center pl-0"
            >
              <v-row
                class="flex-column ma-0 fill-height"
                justify="center"
              >
                <v-col class="px-0">
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-card-text>
            <div class="text--primary">
              A lovely fresh salmon sashimi
            </div>
          </v-card-text>
      </v-card>
      <v-card class="d-inline-block mx-auto">
          <v-card-text>
            <h3>Tuna Sashimi</h3>
          </v-card-text>
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-img
                height="200"
                width="200"
                src="../assets/tuna-sashimi.jpg"
              ></v-img>
            </v-col>

            <v-col
              cols="auto"
              class="text-center pl-0"
            >
              <v-row
                class="flex-column ma-0 fill-height"
                justify="center"
              >
                <v-col class="px-0">
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-card-text>
            <div class="text--primary">
              A lovely fresh tuna sashimi
            </div>
          </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
