import { Commit } from 'vuex'

const state = {
  _state: []
}

const getters = {
  getState: (state: any) => state.users
}

const mutations = {
  setMutation: (state: any, payload: any) => {
    state._state = payload
  }
}

const actions = {
  getAction: ({ commit }: { commit: Commit }, payload: any) => {
    commit('setMutation', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
