<template>
  <Content>
    <Header />
    <div class="sent-body">
      <div class="inbox-body"><MessagesList :list="messages" /></div>
    </div>
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

<style scoped lang="scss">
.sent-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
