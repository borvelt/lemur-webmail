<template>
  <Content>
    <Header />
    <div class="compose-body">
      <input
        v-model="newMessage.to"
        :placeholder="$t('text.mail.to')"
        type="text"
      />

      <input
        v-model="newMessage.bcc"
        :placeholder="$t('text.mail.bcc')"
        type="text"
      />

      <input
        v-model="newMessage.subject"
        :placeholder="$t('text.mail.subject')"
        type="text"
      />

      <textarea
        v-model="newMessage.body"
        :placeholder="$t('text.mail.body')"
      ></textarea>

      <div class="actions">
        <Button class="gray no-border" @click.native="send">
          <span v-once>{{ $t('text.mail.send') }}</span>
        </Button>
        <Button class="gray no-border" @click.native="resetForm">
          <span v-once>{{ $t('text.mail.discard') }}</span>
        </Button>
      </div>
    </div>
  </Content>
</template>

<script>
import Content from '~/components/Content'
import Header from '~/components/Header'
import Button from '~/components/Button'

export default {
  components: {
    Content,
    Header,
    Button
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
@import '~assets/dimensions';

.compose-body {
  padding: $compose-body-padding;
  display: flex;
  flex-direction: column;
  flex: 1 auto;
}

.compose-body input,
.compose-body textarea {
  border: none;
  padding: $compose-body-padding;
  background-color: transparent;
  border-bottom: 1px solid $white;
  flex: 1 auto;
  max-height: $compose-body-input-max-height;
}

.compose-body textarea {
  resize: none;
  max-height: unset;
}

.compose-body .actions {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
}

.compose-body .actions .Button {
  margin: $compose-body-actions-margin;
}

::placeholder {
  opacity: 1;
}
</style>
