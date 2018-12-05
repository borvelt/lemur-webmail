<template>
  <header class="Header">
    <Logo />
    <H2>{{ title || $t('page.' + routeName) }}</H2>

    <input
      v-model="q"
      :placeholder="$t('input.searchPlaceHolder')"
      disabled
      type="text"
      class="search-bar"
      name="q"
    />

    <ul class="actions">
      <li class="compose">
        <A :to="{ name: 'compose' }"> <i class="fas fa-pencil-alt"></i> </A>
      </li>
      <li class="sent">
        <A :to="{ name: 'sent' }"> <i class="fas fa-share-square"></i> </A>
      </li>
      <li class="inbox">
        <A :to="{ name: 'inbox' }"> <i class="fas fa-inbox"></i> </A>
      </li>
    </ul>
    <SwitchUser />
  </header>
</template>

<script>
import Content from '~/components/Content'
import H2 from '~/components/H2'
import Logo from '~/components/Logo'
import SwitchUser from '~/components/SwitchUser'
import A from '~/components/A'

export default {
  components: {
    Content,
    H2,
    Logo,
    SwitchUser,
    A
  },
  props: {
    title: {
      type: [String, Boolean],
      default: () => false
    }
  },
  data: function() {
    return {
      q: ''
    }
  },
  computed: {
    routeName() {
      return this.$route.name.split(this.$i18n.routesNameSeparator)[0]
    }
  }
}
</script>

<style scoped lang="sass">
@import '~assets/colors'
@import '~assets/dimensions'
@import '~assets/mixins'

.Header
  color: $black
  background-color: $white
  width: 100%
  flex-wrap: wrap
  display: flex
  justify-content: space-between
  flex-direction: row
  align-items: stretch
  @include border-radius(0.4rem 0.4rem 0 0)
  @include respond-to(small-screens)
    flex-direction: column
    & > *
      margin-top: 0.5rem
  @include respond-to(large-screens)
    flex-wrap: nowrap
  @include respond-to(xlarge-screens)
    flex-wrap: nowrap

.Logo-wrapper
  max-width: 2rem
  flex: 0.1 auto
  @include respond-to(small-screens)
    display: none
  @include respond-to(medium-screens)
      display: none
  @include respond-to(large-screens)
      display: none

.H2
  min-width: 8.9rem
  align-self: center
  flex: 0.3 auto

.search-bar
  color: $black
  flex: 0.3 auto
  text-align: center
  border: none
  &::placeholder
    color: $black
    text-decoration: underline
  @include respond-to(medium-screens)
    width: 100%
    order: 1
    margin-top: 0.5rem


.actions
  margin: 0
  padding: 0
  flex: 0.2 auto
  align-self: center
  list-style: none
  display: flex
  li
    padding-right: 1rem

.A
  color: $black !important
  padding: 0.3rem
  @include border-radius(50%)

.SwitchUser /deep/ .SelectBox
  @include border-radius(0 0.3rem 0 0)
  @include respond-to(small-screens)
    @include border-radius(0)
  @include respond-to(medium-screens)
    @include border-radius(0 0.3rem 0 0.3rem)
  &:lang(fa)
    @include border-radius(0.3rem 0 0 0)
</style>
