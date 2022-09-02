import { Commit } from 'vuex'

const state: { style: string } = {
  style: 'dark'
}

const getters = {
  getStyle: (state: { style: string }) => state.style
}

const mutations = {
  setStyle: (state: { style: string }, payload: string) => {
    state.style = payload
  }
}

const actions = {
  handleStyle: async ({ commit }: { commit: Commit }, payload: string) => {
    commit('setStyle', payload.toLowerCase())
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
