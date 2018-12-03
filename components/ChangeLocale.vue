<template>
  <SelectBox
    v-model="locale"
    :items="locales"
    :mapper="mapper"
    :on-change="onChange"
  />
</template>

<script>
import SelectBox from '~/components/SelectBox'

export default {
  components: { SelectBox },
  props: {},
  data: function() {
    return {
      locale: this.$store.state.i18n.locale
    }
  },
  computed: {
    locales: function() {
      return this.$i18n.locales
    }
  },
  methods: {
    mapper(x) {
      return { key: x.code, value: x.name }
    },
    onChange() {
      const [page] = this.$router.currentRoute.name.split(
        this.$i18n.routesNameSeparator
      )
      const name = [page, this.$i18n.routesNameSeparator, this.locale].join('')
      this.$router.push({ name })
    }
  }
}
</script>
