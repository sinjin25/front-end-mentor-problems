import { createApp } from 'vue'
import App from './App.vue'
import '../../reset.css'
import './assets/style.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(
    faAngleLeft, faAngleRight
)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
