<template>
  <Container>
    <div>
      <logo/>
      <H1 class="title">lemur-web mail</H1>
      <H2 class="subtitle">
        A web mail to communicate like lemur
      </H2>
      <div class="links">
        <Button
          href="https://nuxtjs.org/"
          target="_blank"
          class="green">Documentation</Button>
        <Button
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="gray">GitHub</Button>
      </div>
    </div>
  </Container>
</template>

<script>
import Logo from '~/components/Logo'
import Container from '~/components/Container'
import H1 from '~/components/H1'
import H2 from '~/components/H2'
import A from '~/components/A'
import Button from '~/components/Button'

export default {
  components: {
    Logo,
    Button,
    A,
    H1,
    H2,
    Container
  }
}
</script>

<style lang="scss">
@import '~assets/colors';
@import '~assets/defaults';

.title {
  font-family: $title-font;
  display: block;
  color: $text-color;
}

.subtitle {
  color: $text-description-color;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
