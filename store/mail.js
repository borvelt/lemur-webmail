export const state = () => ({
  messages: []
})

export const mutations = {
  new(state, newMessage) {
    state.messages.push(newMessage)
  }
}

export const actions = {
  async sendMail({ commit }, newMessage) {
    const { status, ...message } = await this.app.$mail.send(newMessage)
    if (status) {
      commit('new', message)
    } else {
      throw new Error('Failed to send email')
    }
    return status
  }
}
