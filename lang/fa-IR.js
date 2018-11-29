export default () =>
  new Promise(resolve =>
    import('~/locales/fa-IR').then(locale =>
      setTimeout(() => resolve(locale.default), 1000)
    )
  )
