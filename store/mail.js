export const state = () => ({
  mails: [
    {
      from: 'borvelt@gmail.com',
      subject: 'Greet',
      to: 'erru@gmail.com',
      body: 'Hi Ernest',
      time: 123456
    }
  ]
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
  inbox: (state, getter, rootState, rootGetters) => {
    return state.mails.filter(mail => mail.to === rootGetters['user/email'])
  },
  sentbox: (state, getter, rootState, rootGetters) => {
    return state.mails.filter(mail => mail.from === rootGetters['user/email'])
  }
}
