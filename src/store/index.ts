import { createStore } from 'vuex'
import template from './modules/template'

const store = createStore({
  modules: {
    template
  }
})

export default store
