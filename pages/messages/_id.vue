<template>
  <Content>
    <Header />
    <div class="show-message">
      <div class="messages-list">
        <div :key="message.time" class="message-item">
          <div>
            <h5 class="label">{{ $t('text.mail.subject') }}</h5>
            <span>{{ message.subject }}</span>
          </div>
          <div>
            <h5 class="label">{{ $t(message.translationString) }}</h5>
            <span>{{ message.dest }}</span>
          </div>
          <p class="label body">{{ message.body }}</p>
        </div>
      </div>
    </div>
  </Content>
</template>

<script>
import Content from '~/components/Content'
import Header from '~/components/Header'

export default {
  components: {
    Content,
    Header
  },
  asyncData({ params, app }) {
    return app.$mail.findById(params)
  }
}
</script>

<!--remove scoped to h2 settings work... -->
<style scoped lang="scss">
@import '~assets/messages';
.show-message {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header /deep/ h2 {
  font-size: 1.5rem !important;
}
</style>
