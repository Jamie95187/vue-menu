import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextAreaAutosize from 'vue-textarea-autosize';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import firebase from 'firebase/app';
import store from './store'
import 'firebase/firestore';
import router from './router';
import AlertComponent from './components/Shared/Alert.vue';

Vue.use(VueTextAreaAutosize);

Vue.config.productionTip = false
Vue.config.silent = true

Vue.component('app-alert', AlertComponent);

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
  store,
  router,
  render: h => h(App)
}).$mount('#app')
