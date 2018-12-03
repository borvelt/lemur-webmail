<template>
  <Content>
    <Logo />
    <H1>{{ $t('text.title') }}</H1>
    <H2>{{ $t('text.description') }}</H2>
    <div class="links">
      <A :to="{ name: 'compose' }" class="green no-border">
        <Button class="green"> {{ $t('text.compose') }} </Button>
      </A>
      <A :to="{ name: 'about' }" class="green no-border">
        <Button class="green"> {{ $t('text.about') }} </Button>
      </A>
    </div>
    <ChangeLocale />
  </Content>
</template>

<script>
import Logo from '~/components/Logo'
import Content from '~/components/Content'
import H1 from '~/components/H1'
import H2 from '~/components/H2'
import A from '~/components/A'
import Button from '~/components/Button'
import ChangeLocale from '~/components/ChangeLocale'

export default {
  components: {
    Logo,
    ChangeLocale,
    A,
    H1,
    H2,
    Content,
    Button
  }
}
</script>

<style scoped lang="scss">
@import '~assets/colors';
@import '~assets/defaults';

.H1 {
  font-family: $title-font;
  display: block;
}

.H2 {
  color: $green;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.Logo-wrapper {
  width: 25%;
}
.links {
  padding-top: 15px;
}
.ChangeLocale {
  align-self: flex-end;
}
.ChangeLocale /deep/ select {
  -webkit-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  border-radius: 0.4rem 0 0 0;
}
</style>
