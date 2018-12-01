export const state = () => ({
  name: ''
})

export const mutations = {
  set(state, newRoute) {
    state.name = newRoute
  }
}
