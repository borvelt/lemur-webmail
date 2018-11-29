export default () =>
  new Promise(resolve =>
    import('~/locales/en-US').then(locale => resolve(locale.default))
  )
