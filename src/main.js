import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDcecGLgTDMahwuct-6bK95No5IhwfEpPE",
  authDomain: "vue-sushi-menu.firebaseapp.com",
  databaseURL: "https://vue-sushi-menu.firebaseio.com",
  projectId: "vue-sushi-menu",
  storageBucket: "vue-sushi-menu.appspot.com",
  messagingSenderId: "1016298136811",
  appId: "1:1016298136811:web:0c1ac900891e48cfd6caae"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
