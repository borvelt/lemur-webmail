<template>
  <div class="locale-wrapper">
    <select v-model="locale" name="locale" title="Locale" @change="onChange()">
      <option v-for="locale in locales" :key="locale.iso" :value="locale.code">
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
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

<style scoped lang="scss">
@import '~assets/colors';
.locale-wrapper {
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  width: 100%;
}
.locale-wrapper > select {
  border: none;
  background-color: $dark-green;
  color: $white;
}
</style>
