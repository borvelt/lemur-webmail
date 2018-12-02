<template>
  <div class="select-box-wrapper">
    <select :value="value" :name="name" @change="_onChange($event)">
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

<style scoped lang="scss">
@import '~assets/colors';
.select-box-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.select-box-wrapper > select {
  border: none;
  background-color: $dark-green;
  color: $white;
}
</style>
