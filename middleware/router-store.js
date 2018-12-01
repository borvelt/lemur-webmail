// export default ({ store, route }) =>
//   new Promise(resolve =>
//     setTimeout(() => resolve(store.commit('route/set', route)), 200)
//   )

export default ({ store, route }) => store.commit('route/set', route)
