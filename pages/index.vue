<template>
  <Content>
    <Logo />
    <H1>{{ $t('lemur.title') }}</H1>
    <H2>{{ $t('lemur.description') }}</H2>
    <div class="links">
      <A :to="{ name: 'compose' }" class="green no-border">
        <Button class="green"> {{ $t('page.compose') }} </Button>
      </A>
      <A :to="{ name: 'about' }" class="green no-border">
        <Button class="green"> {{ $t('page.about') }} </Button>
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
}

.Logo-wrapper {
  width: 25%;
}
.links {
  padding-top: 1rem;
}
.ChangeLocale {
  align-self: flex-end;
}
.ChangeLocale /deep/ select {
  // TODO: why we need to add !important, when wanna build.
  -webkit-border-radius: 0.4rem 0 0 0 !important;
  -moz-border-radius: 0.4rem 0 0 0 !important;
  border-radius: 0.4rem 0 0 0 !important;
}

.ChangeLocale /deep/ select:lang(fa) {
  -webkit-border-radius: 0 0.4rem 0 0;
  -moz-border-radius: 0 0.4rem 0 0;
  border-radius: 0 0.4rem 0 0;
}
</style>
