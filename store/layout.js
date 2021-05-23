export const state = () => {
  return {
    sidebarVisible: false,
  }
}

export const mutations = {
  toggleSidebar(state) {
    state.sidebarVisible = !state.sidebarVisible
  },
  setSidebarVisible(state, visible) {
    state.sidebarVisible = visible
  },
}

export const actions = {
  toggleSidebar({ commit }) {
    commit('toggleSidebar')
  },
  closeSidebar({ commit }) {
    commit('setSidebarVisible', false)
  },
}
