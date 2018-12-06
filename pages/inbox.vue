<template>
  <Content>
    <Header />
    <div class="inbox-body"><MessagesList :list="messages" /></div>
  </Content>
</template>

<script>
import Content from '~/components/Content'
import Header from '~/components/Header'
import MessagesList from '~/components/MessagesList'
import { mapGetters } from 'vuex'

export default {
  components: {
    Content,
    Header,
    MessagesList
  },
  computed: {
    ...mapGetters({
      messages: 'mail/inbox'
    })
  }
}
</script>

<style scoped lang="sass">
.inbox-body
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
</style>
