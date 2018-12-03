<template>
  <header class="header">
    <Logo />
    <H2>{{ title || $t('text.' + routeName) }}</H2>

    <input
      v-model="q"
      :placeholder="$t('text.searchPlaceHolder')"
      type="text"
      class="search-bar"
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
    </ul>
    <SwitchUser class="switch-user" />
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

<style scoped lang="scss">
@import '~assets/colors';
@import '~assets/dimensions';

header {
  color: $black;
  background-color: $white;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: stretch;
  -webkit-border-radius: 0.4rem 0.4rem 0 0;
  -moz-border-radius: 0.4rem 0.4rem 0 0;
  border-radius: 0.4rem 0.4rem 0 0;
}

.logo-wrapper {
  max-width: 2rem;
  flex: 0.1 auto;
}

h2 {
  min-width: 8.9rem;
  align-self: center;
  flex: 0.3 auto;
}

.search-bar {
  color: $black;
  flex: 0.3 auto;
  text-align: center;
  border: none;
}

.actions {
  margin-bottom: 0;
  padding: 0;
  flex: 0.2 auto;
  align-self: center;
  list-style: none;
  display: flex;
}

.locale-wrapper {
  width: unset;
  flex: 0.1 auto;
}

.search-bar::placeholder {
  color: $black;
  text-decoration: underline;
}

.actions > li {
  padding-right: 1rem;
}

.button {
  color: $black !important;
  padding: 0.3rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  box-shadow: 0 1px 3px #111;
}

.switch-user /deep/ select {
  -webkit-border-radius: 0 0.3rem 0 0;
  -moz-border-radius: 0 0.3rem 0 0;
  border-radius: 0 0.3rem 0 0;
}

@media only screen and (min-device-width: 0px) and (max-device-width: 600px) {
  header {
    flex-direction: column;
  }
  header > * {
    margin-top: 0.5rem;
  }
  .logo-wrapper {
    display: none;
  }
  .switch-user /deep/ select {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
}
@media only screen and (min-device-width: 601px) and (max-device-width: 1024px) {
  header {
  }
  .search-bar {
    width: 100%;
    order: 1;
    margin-top: 0.5rem;
  }
  .logo-wrapper {
    display: none;
  }
  .switch-user /deep/ select {
    -webkit-border-radius: 0 0.3rem 0 0.3rem;
    -moz-border-radius: 0 0.3rem 0 0.3rem;
    border-radius: 0 0.3rem 0 0.3rem;
  }
}

@media only screen and (min-device-width: 1025px) and (max-device-width: 1224px) {
  header {
    flex-wrap: nowrap;
  }
  .logo-wrapper {
    display: none;
  }
}
@media only screen and (min-device-width: 1224px) {
  header {
    flex-wrap: nowrap;
  }
}
</style>
