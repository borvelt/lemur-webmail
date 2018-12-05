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

export const getters = {
  email: state => state.current.email
}
