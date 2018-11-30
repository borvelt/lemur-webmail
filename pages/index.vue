<template>
  <Content>
    <Logo />
    <H1>{{ $t('text.title') }}</H1>
    <H2>{{ $t('text.description') }}</H2>
    <div class="links">
      <Button
        :to="{name: 'compose'}"
        class="green">{{ $t('text.start') }}</Button>
    </div>
    <ChangeLocale />
  </Content>
</template>

<script>
import Logo from '~/components/Logo'
import Content from '~/components/Content'
import H1 from '~/components/H1'
import H2 from '~/components/H2'
import Button from '~/components/Button'
import ChangeLocale from '~/components/ChangeLocale'

export default {
  components: {
    Logo,
    ChangeLocale,
    Button,
    H1,
    H2,
    Content
  }
}
</script>

<style scoped lang="scss">
@import '~assets/colors';
@import '~assets/defaults';

h1 {
  font-family: $title-font;
  display: block;
}

h2 {
  color: $green;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
