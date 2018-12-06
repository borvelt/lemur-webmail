<template>
  <button class="Button"><slot /></button>
</template>

<style scoped lang="sass">
@import '~assets/colors'
@import '~assets/dimensions'
@import '~assets/mixins'

.Button
  background-color: transparent
  color: $white !important
  display: inline-block
  @include border-radius(0.4rem)
  border: 1px solid
  text-decoration: none !important
  box-sizing: border-box
  padding: $padding-buttons
  -webkit-font-smoothing: antialiased
  -webkit-touch-callout: none
  user-select: none
  cursor: pointer
  outline: 0 !important

  &.no-border
    border: none

  &:hover
    color: #fff

  &.green
    background-color: $green
    &:hover
      background-color: $dark-green

  &.gray
    background-color: $gray
    &:hover
      background-color: $dark-gray
</style>
