// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'font-awesome/css/font-awesome.min.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import 'admin-lte/bower_components/jquery-slimscroll/jquery.slimscroll.min.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    "el": '#app',
    router,
    "components": { App },
    "template": '<App/>'
})
