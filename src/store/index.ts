import { createStore } from 'vuex'
import template from './modules/template'
import styleSetting from './modules/styleSetting'

const store = createStore({
  modules: {
    template,
    styleSetting
  }
})

export default store
