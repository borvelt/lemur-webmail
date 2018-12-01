export const state = () => ({
  route: '/'
})

export const mutations = {
  set(state, newRoute) {
    state.route = newRoute
  }
}
