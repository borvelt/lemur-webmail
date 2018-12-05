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
import { mapGetters } from 'vuex'

export default {
  components: {
    Content,
    Header,
    MessagesList
  },
  computed: {
    ...mapGetters({
      messages: 'mail/sentbox'
    })
  },
  mounted() {
    const { user, messages } = mapGetters({
      user: 'user/email',
      messages: 'mail/sentbox'
    })
    console.log(messages.call(this), user.call(this))
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
