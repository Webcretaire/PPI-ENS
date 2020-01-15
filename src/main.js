import Vue               from 'vue'
import App               from './App.vue'
import VueTippy          from "vue-tippy";
import {library}         from '@fortawesome/fontawesome-svg-core';
import {fas}             from '@fortawesome/free-solid-svg-icons';
import {fab}             from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';


Vue.use(VueTippy);

library.add(fas);
library.add(fab);

Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
