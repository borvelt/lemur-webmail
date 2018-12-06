<template>
  <!--<nuxt-link :to="toWithLocale" class="A" @click.stop.native="handleClick">-->
  <!--<slot />-->
  <!--</nuxt-link>-->
  <a href="javascript:void(0)" @click="handleClick"> <slot /> </a>
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
        ? Object.assign({}, this.to, {
            name: [
              this.to.name,
              this.$i18n.routesNameSeparator,
              this.$store.state.i18n.locale
            ].join('')
          })
        : this.to
    }
  },
  methods: {
    handleClick(e) {
      const { parentNode } = e.target
      parentNode.hasAttribute('ga') && this.$root.$emit('ga-click', parentNode)
    }
  }
}
</script>
<style scoped lang="sass">
@import '~assets/colors'

.A
  color: $default-links-color
  &:hover
    color: $default-links-color-hover
</style>
