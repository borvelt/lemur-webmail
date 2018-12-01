<template>
  <Container> <nuxt /> </Container>
</template>

<script>
import Container from '~/components/Container'

export default {
  components: {
    Container
  }
}
</script>

<style lang="scss">
@import '~assets/dimensions';
@import '~assets/colors';
@import '~assets/defaults';
html {
  background-color: $green;
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
