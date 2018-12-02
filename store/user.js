export const state = () => ({
  current: {
    name: 'borvelt',
    email: 'borvelt@gmail.com'
  }
})

export const mutations = {
  change(state, user) {
    state.current = user
  }
}
