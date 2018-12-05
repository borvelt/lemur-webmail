<template>
  <div class="Content"><slot /></div>
</template>

<style scoped lang="sass">
@import '~assets/colors'
@import '~assets/mixins'

.Content
  color: $white
  background-color: $gray
  min-height: 85vh
  width: 60vw
  display: flex
  justify-content: flex-start
  align-items: stretch
  flex-direction: column
  box-shadow: 0.1rem 0.1rem 1rem $black
  @include border-radius(0.4rem)
</style>
