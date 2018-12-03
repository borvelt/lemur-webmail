<template>
  <div class="MessagesList">
    <A
      v-for="message in list"
      :key="message.time"
      :to="{ name: 'messages-id', params: { id: message.time } }"
    >
      <MessageItem :item="message" />
    </A>
    <div v-if="!list.length" class="MessageItem centered">
      {{ $t('text.mail.boxEmpty') }}
    </div>
  </div>
</template>

<script>
import MessageItem from '~/components/MessageItem'
import A from '~/components/A'

export default {
  components: { MessageItem, A },
  props: {
    list: { type: Array, default: () => [] }
  }
}
</script>

<style>
.MessagesList {
  width: 90%;
  padding: 10px 0;
  list-style: none;
}
.A {
  text-decoration: none;
}
</style>
