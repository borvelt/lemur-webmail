<template>
  <div class="SelectBox-wrapper">
    <select
      :value="value"
      :name="name"
      class="SelectBox"
      @change="_onChange($event)"
    >
      <option v-for="item in list" :key="item.key" :value="item.key">
        {{ item.value }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: ['value', 'name', 'title', 'items', 'mapper', 'on-change'],
  created() {
    this.list = this.items.map(this.mapper)
  },
  methods: {
    _onChange($event) {
      this.$emit('change', $event.target.value)
      this.onChange instanceof Function && this.onChange($event)
    }
  }
}
</script>

<style scoped lang="sass">
@import '~assets/colors'
@import '~assets/mixins'

.SelectBox-wrapper
  display: flex
  justify-content: flex-end
  .SelectBox
    width: 100%
    border: none
    background-color: $dark-green
    color: $white
    padding: 0 0 0 0.4rem
    -webkit-appearance: none
    @include border-radius(0)
</style>
