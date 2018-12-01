<template>
  <header class="header">
    <Logo />
    <H2>{{ $t('text.' + routeName) }}</H2>

    <input
      v-model="q"
      :placeholder="$t('text.searchPlaceHolder')"
      type="text"
      name="q"
    />

    <ul class="actions">
      <li class="compose">
        <A :to="{ name: 'compose' }" class="button">
          <i class="fas fa-pencil-alt"></i>
        </A>
      </li>
      <li class="sent">
        <A :to="{ name: 'sent' }" class="button">
          <i class="fas fa-share-square"></i>
        </A>
      </li>
      <li class="inbox">
        <A :to="{ name: 'inbox' }" class="button">
          <i class="fas fa-inbox"></i>
        </A>
      </li>
      <li class="draft">
        <A :to="{ name: 'draft' }" class="button">
          <i class="fas fa-edit"></i>
        </A>
      </li>
      <li class="flagged">
        <A :to="{ name: 'flagged' }" class="button">
          <i class="fab fa-font-awesome-flag"></i>
        </A>
      </li>
    </ul>
    <ChangeLocale />
  </header>
</template>

<script>
import Content from '~/components/Content'
import H2 from '~/components/H2'
import Logo from '~/components/Logo'
import ChangeLocale from '~/components/ChangeLocale'
import A from '~/components/A'

export default {
  components: {
    Content,
    H2,
    Logo,
    ChangeLocale,
    A
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

<style scoped lang="scss">
@import '~assets/colors';
header {
  color: $black;
  background-color: $white;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: stretch;
  -webkit-border-radius: 5px 5px 0 0;
  -moz-border-radius: 5px 5px 0 0;
  border-radius: 5px 5px 0 0;
}
header .logo-wrapper {
  max-width: 70px;
  flex: 0.1 auto;
}

header > h2 {
  min-width: 214px;
  align-self: center;
  flex: 0.3 auto;
}

header > input {
  color: $black;
  font-size: 1.5em;
  flex: 0.3 auto;
  text-align: center;
  border: none;
}
header > input::placeholder {
  color: $black;
  text-decoration: underline;
}

header > .actions {
  margin-bottom: 0;
  padding: 0;
  flex: 0.2 auto;
  align-self: center;
  list-style: none;
  display: flex;
}
header > .actions > li {
  padding: 5px;
}

header > .locale-wrapper {
  width: unset;
  flex: 0.1 auto;
  /*background-color: $dark-green;*/
}

header .button {
  color: $black !important;
  padding: 5px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  box-shadow: 0px 1px 3px #111;
}
</style>
