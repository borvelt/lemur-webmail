<template>
  <Content>
    <Header />
    <div class="inbox-body">
      <ul class="messages-list">
        <A
          v-for="message in messages"
          :key="message.time"
          :to="{ name: 'messages-id', params: { id: message.time } }"
        >
          <li class="message-item">
            <div>
              <h5 class="label">{{ $t('text.mail.subject') }}</h5>
              <span>{{ message.subject }}</span>
            </div>
            <div>
              <h5 class="label">{{ $t('text.mail.from') }}</h5>
              <span>{{ message.from }}</span>
            </div>
            <p class="label body">{{ message.body }}</p>
          </li>
        </A>
        <li v-if="!messages.length" class="message-item centered">
          {{ $t('text.mail.inboxEmpty') }}
        </li>
      </ul>
    </div>
  </Content>
</template>

<script>
import Content from '~/components/Content'
import Header from '~/components/Header'
import A from '~/components/A'
export default {
  components: {
    Content,
    Header,
    A
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

<style lang="scss">
@import '~assets/messages';
.inbox-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.A {
  text-decoration: none;
}
</style>
