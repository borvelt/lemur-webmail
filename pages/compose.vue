<template>
  <Content>
    <Header />
    <div class="compose-body">
      <input
        v-model="newMessage.to"
        :placeholder="$t('text.mail.to')"
        type="text"
        class="input to"
      />

      <input
        v-model="newMessage.bcc"
        :placeholder="$t('text.mail.bcc')"
        type="text"
        class="input bcc"
      />

      <input
        v-model="newMessage.subject"
        :placeholder="$t('text.mail.subject')"
        type="text"
        class="input subject"
      />

      <textarea
        v-model="newMessage.body"
        :placeholder="$t('text.mail.body')"
        class="input body"
      ></textarea>

      <div class="actions">
        <button class="button gray no-border" @click="send">
          <span v-once>{{ $t('text.mail.send') }}</span>
        </button>
        <button class="button gray no-border" @click="resetForm">
          <span v-once>{{ $t('text.mail.discard') }}</span>
        </button>
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
  data: function() {
    return {
      newMessage: this.$store.app.$mail.initialize()
    }
  },
  methods: {
    send() {
      this.$nuxt.$loading.start()
      this.newMessage.from = this.$store.state.user.current.email
      this.$store
        .dispatch('mail/sendMail', this.newMessage)
        .then(() => alert('Message sent.'))
        .catch(error => alert(error))
        .finally(() => {
          this.$nuxt.$loading.finish()
          this.resetForm()
        })
    },
    resetForm() {
      Object.assign(this.$data, { newMessage: {} })
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/colors';

.compose-body {
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1 auto;
}

.compose-body .input {
  font-size: 1.2em;
  border: none;
  padding: 10px;
  background-color: transparent;
  border-bottom: 1px solid $white;
  flex: 1 auto;
  max-height: 50px;
}

.compose-body textarea.input {
  resize: none;
  max-height: unset;
}

.compose-body .actions {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
}

.compose-body .actions .button {
  margin: 10px 0 0 10px;
}

::placeholder {
  opacity: 1;
}
</style>
