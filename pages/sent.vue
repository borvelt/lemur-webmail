<template>
  <Content>
    <Header />
    <div class="sent-body"><MessagesList :list="messages" /></div>
  </Content>
</template>

<script>
import Content from '~/components/Content'
import Header from '~/components/Header'
import MessagesList from '~/components/MessagesList'

export default {
  components: {
    Content,
    Header,
    MessagesList
  },
  computed: {
    messages: function() {
      return this.$store.state.mail.messages.filter(
        message => message.from === this.$store.state.user.current.email
      )
    }
  }
}
</script>

<style scoped lang="sass">
.sent-body
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
</style>
