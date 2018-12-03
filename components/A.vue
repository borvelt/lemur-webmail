<template>
  <nuxt-link :to="toWithLocale" class="A"><slot /></nuxt-link>
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
  }
}
</script>
<style scoped lang="scss">
@import '~assets/colors';
a {
  color: $default-links-color;
}
a:hover {
  color: $default-links-color-hover;
}
</style>
