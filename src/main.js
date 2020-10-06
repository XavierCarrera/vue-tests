import Vue from 'vue'
import App from './App.vue'
import {firestorePlugin} from 'vuefire'  
import *as firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/storage'
 
//import VueFire from 'vuefire'
import router from './router/index'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDMFJR99TyH_mDjZppQdYJ0P9CtVF_aezQ",
  authDomain: "meme-maker-bffb4.firebaseapp.com",
  databaseURL: "https://meme-maker-bffb4.firebaseio.com",
  projectId: "meme-maker-bffb4",
  storageBucket: "meme-maker-bffb4.appspot.com",
  messagingSenderId: "860984194578",
  appId: "1:860984194578:web:b47820f418ecb6eb9ecacb",
  measurementId: "G-LLT731QT5Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestore = firebaseApp.firestore()
export const storage = firebase.storage().ref('/images')

Vue.use(firestorePlugin)


new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: {App} 
}).$mount('#app')
