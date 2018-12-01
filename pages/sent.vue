<template>
  <Content>
    <Header />
    <div class="sent-body">
      <ul class="messages-list">
        <li
          v-for="message in messages"
          :key="message.time"
          class="message-item"
        >
          <div>
            <h5 class="label">{{ $t('text.mail.subject') }}</h5>
            <span>{{ message.subject }}</span>
          </div>
          <div>
            <h5 class="label">{{ $t('text.mail.to') }}</h5>
            <span>{{ message.to }}</span>
          </div>
          <p class="label body">{{ message.body }}</p>
        </li>
      </ul>
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
  data: function() {
    return {
      messages: this.$store.app.$mail.seed()
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/colors';
.sent-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.messages-list {
  width: 90%;
  padding: 10px 0;
  list-style: none;
}
.message-item {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: $white;
  color: $black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.messages-item {
  margin: 5px 0 5px 3px;
}

.label {
  margin: 0px 10px 0 3px;
  display: inline;
}

.body {
  text-align: left;
}
</style>
