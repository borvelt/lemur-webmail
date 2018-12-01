// export default () =>
//   new Promise(resolve =>
//     import('~/locales/fa-IR').then(locale =>
//       setTimeout(() => resolve(locale.default), 1000)
//     )
//   )
export default () =>
  new Promise(resolve =>
    import('~/locales/fa-IR').then(locale => resolve(locale.default))
  )
