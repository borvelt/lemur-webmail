<template>
  <header class="header">
    <Logo />
    <H2>{{ $t('text.' + routeName) }}</H2>
    <input :model="q"
           :value="q"
           :placeholder="$t('text.search')"
           type="text" name="q"
    />
    <ul class="actions">
      <li class="compose">
        <A :to="{name: 'compose'}">{{ $t('text.compose') }}</A>
      </li>
      <li class="draft">
        <A :to="{name: 'draft'}">{{ $t('text.draft') }}</A>
      </li>
      <li class="inbox">
        <A :to="{name: 'inbox'}">{{ $t('text.inbox') }}</A>
      </li>
      <li class="flagged">
        <A :to="{name: 'flagged'}">{{ $t('text.flagged') }}</A>
      </li>
    </ul>
    <ChangeLocale />
  </header>
</template>

<script>
import Content from '~/components/Content'
import H1 from '~/components/H1'
import Logo from '~/components/Logo'
import ChangeLocale from '~/components/ChangeLocale'
import A from '~/components/A'

export default {
  components: {
    Content,
    H1,
    Logo,
    ChangeLocale,
    A
  },
  data: function() {
    return {
      q: 'search'
    }
  },
  computed: {
    routeName() {
      return this.$route.name.split(this.$i18n.routesNameSeparator)[0]
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/colors';
header {
  color: $black;
  background-color: $white;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  -webkit-border-radius: 5px 5px 0 0;
  -moz-border-radius: 5px 5px 0 0;
  border-radius: 5px 5px 0 0;
}
header .logo-wrapper {
  max-width: 5%;
  flex: 1 auto;
}
header > h2 {
  align-self: center;
  flex: 1 auto;
}

header > input {
  font-size: 2em;
  flex: 10 auto;
}
header > .actions {
  margin-bottom: 0;
  padding: 0;
  align-self: center;
  list-style: none;
  display: flex;
}
header > .actions > li {
  padding: 5px;
}
header > .locale-wrapper {
  width: unset;
}
</style>
