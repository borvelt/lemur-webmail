import Vue from 'vue'
export default ({ app }) => {
  const attributes = ['ga-category', 'ga-action', 'ga-label']
  // This function is so mess, some times we should play with javascript
  // magics. ;)
  const makeKey = attr =>
    typeof attr === typeof ''
      ? 'event' +
        [...attr]
          .map(el => el.replace('ga-', ''))
          .reduce((p, c, i) =>
            i > 2 ? (i === 4 ? p.toUpperCase() + c : p + c) : ''
          )
      : attr

  Vue.directive('ga', {
    inserted: function(el, binding, vmnode) {
      el.setAttribute('ga', '')
      const mappedEventAttributes = {
        hitType: 'event',
        hitCallback() {
          console.log('Big Like!')
        }
      }
      attributes.forEach(
        attr => (mappedEventAttributes[makeKey(attr)] = el.getAttribute(attr))
      )
      console.log(vmnode.tag)
      vmnode.context.$root.$on('ga-click', () => {
        console.log(mappedEventAttributes)
        app.$ga('send', mappedEventAttributes)
      })
    }
  })
}
