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

export default {
  components: {
    Content,
    Header,
    MessagesList
  },
  computed: {
    messages: function() {
      return this.$store.state.mail.messages.filter(
        message => message.to === this.$store.state.user.current.email
      )
    }
  }
}
</script>

<style scoped lang="scss">
.inbox-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
