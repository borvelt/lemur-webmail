export default ({ app }) => {
  app.$mail = {
    seed() {
      return [
        {
          from: 'borvelt@gmail.com',
          subject: 'subject1',
          to: 'to1@gmail.com',
          bcc: 'to1@gmail.com',
          body:
            'this is test1 messages with test body... this is test1 messages with test body... this is test1 messages with test body... this is test1 messages with test body... this is test1 messages with test body... '
        },
        {
          from: 'borvelt@gmail.com',
          subject: 'subject2',
          to: 'to2@gmail.com',
          bcc: 'to2@gmail.com',
          body:
            'this is test2 messages with test body... this is test2 messages with test body... this is test2 messages with test body... this is test2 messages with test body... this is test2 messages with test body...'
        },
        {
          from: 'borvelt@gmail.com',
          subject: 'subject3',
          to: 'to3@gmail.com',
          bcc: 'to3@gmail.com',
          body:
            'this is test3 messages with test body... this is test3 messages with test body... this is test3 messages with test body... this is test3 messages with test body... this is test3 messages with test body... '
        }
      ]
    },
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
          2000
        )
      )
    }
  }
}
