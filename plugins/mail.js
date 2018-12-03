export default ({ app, error }) => {
  app.$mail = {
    initialize(data = {}) {
      return Object.assign(
        {},
        {
          from: 'borvelt@gmail.com',
          subject: '',
          to: '',
          bcc: '',
          body: ''
        },
        data
      )
    },
    send(message) {
      return new Promise(resolve =>
        setTimeout(
          () =>
            resolve(
              Object.assign({}, { status: true, time: Date.now() }, message)
            ),
          1000
        )
      )
    },
    findById(params) {
      const currentUserEmail = app.store.state.user.current.email
      const messages = app.store.state.mail.messages
      const [message] = messages.filter(
        message =>
          message.time === params.id &&
          (message.from === currentUserEmail || message.to === currentUserEmail)
      )
      if (!message) {
        return error({
          statusCode: 404,
          message: app.i18n.t('message.notFound')
        })
      }
      return {
        message
      }
    }
  }
}
