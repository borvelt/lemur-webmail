export const state = () => ({
  mails: []
})

export const mutations = {
  new(state, newMail) {
    state.mails.push(newMail)
  }
}

export const actions = {
  async sendMail({ commit }, newMail) {
    const { status, ...message } = await this.app.$mail.send(newMail)
    if (status) {
      commit('new', message)
    } else {
      throw new Error('Failed to send email')
    }
    return status
  }
}

export const getters = {
  inbox: (state, getters) =>
    state.mails.filter(mail => mail.to === getters['user/email']),

  sentbox: state => state.mails
  // state.mails.filter(mail => mail.from === getters['user/email'])
}
