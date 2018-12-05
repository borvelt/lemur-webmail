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
    send(mail) {
      return new Promise(resolve =>
        setTimeout(
          () =>
            resolve(
              Object.assign({}, { status: true, time: Date.now() }, mail)
            ),
          1000
        )
      )
    },
    findById(params) {
      const currentUserEmail = app.store.getters['user/email']
      const mails = app.store.state.mail.mails
      const [mail] = mails.filter(
        mail =>
          mail.time === params.id &&
          (mail.from === currentUserEmail || mail.to === currentUserEmail)
      )
      if (!mail) {
        return error({
          statusCode: 404,
          mail: app.i18n.t('mail.notFound')
        })
      }
      return {
        message: mail
      }
    }
  }
}
