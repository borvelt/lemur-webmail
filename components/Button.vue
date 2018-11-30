<template>

  <nuxt-link :to="toWithLocale"><slot /></nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: function() {
        return {}
      }
    }
  },
  computed: {
    toWithLocale: function() {
      return this.to instanceof Object
        ? {
            name: [
              this.to.name,
              this.$i18n.routesNameSeparator,
              this.$store.state.i18n.locale
            ].join('')
          }
        : this.to
    }
  }
}
</script>

<style scoped lang="sass">
@import '~assets/colors'
@import '~assets/dimensions'

a
  color: #fff
  display: inline-block
  border-radius: 4px
  border: 1px solid
  text-decoration: none
  box-sizing: border-box
  padding: $padding-buttons
  -webkit-font-smoothing: antialiased
  -webkit-touch-callout: none
  user-select: none
  cursor: pointer
  outline: 0

a:hover
  color: #fff

.green
  background-color: $green

.green:hover
  background-color: $dark-green

.gray
  background-color: $gray

.gray:hover
  background-color: $dark-gray

</style>
