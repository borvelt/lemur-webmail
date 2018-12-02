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
<style scoped>
a {
  color: #41addd;
}
a:hover {
  color: #6cc0e5;
}
</style>
