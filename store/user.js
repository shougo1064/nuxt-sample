export const state = () => {
  return {
    users: [],
  }
}

export const getters = {}

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  async fetchUsers({ commit }) {
    try {
      const response = await this.$axios.get(
        'http://jsonplaceholder.typicode.com/users'
      )
      const users = response.data
      commit('setUsers', users)
    } catch (err) {
      const res = err.response
      console.log(res)
    }
  },
}
