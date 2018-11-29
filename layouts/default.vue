<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
@import '~assets/dimensions';
@import '~assets/defaults';
html {
  font-family: $font-stack;
  font-size: $font-size;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
