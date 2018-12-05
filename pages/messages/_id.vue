<template>
  <Content>
    <Header />
    <div class="show-message"><MessageItem :item="message" /></div>
  </Content>
</template>

<script>
import Content from '~/components/Content'
import Header from '~/components/Header'
import MessageItem from '../../components/MessageItem'

export default {
  components: {
    MessageItem,
    Content,
    Header
  },
  asyncData({ params, app }) {
    return app.$mail.findById(params)
  }
}
</script>

<style scoped lang="sass">
.Header /deep/ .H2
  font-size: 1.5rem !important
</style>
