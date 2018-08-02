import devtools from '@vue/devtools';
import Vue from 'nativescript-vue';

// import router from './router';
import HelloWorld from './components/HelloWorld.vue'

import store from './store';

import './styles.scss';
// Vue.config.silent = false;

const app = new Vue({

  // router,

  store,

  render: h => h(HelloWorld)
})

devtools.connect('ws://172.20.3.102', 8098, {
  app,
  highlight: () => {},
  showToast: (message) => require('nativescript-toast').makeText(message).show(),
  io: (uri) => {
    const SocketIO = require('nativescript-socket.io')
    SocketIO.enableDebug()
    
    return SocketIO.connect(uri)
  }
})
devtools.init(Vue);
app.$start();
