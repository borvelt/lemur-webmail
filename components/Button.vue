<template>
  <Button class="Button"><slot /></Button>
</template>

<style scoped lang="scss">
@import '~assets/colors';
@import '~assets/dimensions';

.Button {
  background-color: transparent;
  color: $white !important;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid;
  text-decoration: none !important;
  box-sizing: border-box;
  padding: $padding-buttons;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0 !important;
}

.Button.no-border {
  border: none;
}

.Button:hover {
  color: #fff;
}

.Button.green {
  background-color: $green;
}

.Button.green:hover {
  background-color: $dark-green;
}

.Button.gray {
  background-color: $gray;
}

.Button.gray:hover {
  background-color: $dark-gray;
}
</style>
