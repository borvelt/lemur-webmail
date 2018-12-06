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
      return this.$store.getters['mail/sentbox']
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
