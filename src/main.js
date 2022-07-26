import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import font awesome icon component */

library.add(fas)


createApp(App)
    .component('fa', FontAwesomeIcon)
    .mount('#app')
