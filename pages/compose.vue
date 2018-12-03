<template>
  <Content>
    <Header />
    <div class="compose-body">
      <input
        v-model="newMessage.to"
        :placeholder="$t('text.mail.to')"
        :class="{ error: error.to }"
        type="text"
        @blur="_validate"
      />
      <input
        v-model="newMessage.subject"
        :placeholder="$t('text.mail.subject')"
        :class="{ error: error.subject }"
        class="subject"
        type="text"
        @blur="_validate"
      />

      <textarea
        v-model="newMessage.body"
        :placeholder="$t('text.mail.body')"
        :class="{ error: error.body }"
        class="body"
        @blur="_validate"
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
      newMessage: this.$store.app.$mail.initialize(),
      error: {}
    }
  },
  methods: {
    _validate() {
      this.error = {}
      const emailRegex = /\S+@\S+\.\S+/
      const v = this.newMessage
      if (!emailRegex.test(v.to)) {
        this.error['to'] = 'validation.email.notMatched'
        return false
      }
      if (v.to === '' || typeof v.to !== typeof '') {
        this.error['to'] = 'validation.email.empty'
        return false
      }
      if (v.subject === '' || typeof v.subject !== typeof '') {
        this.error['subject'] = 'validation.subject.empty'
        return false
      }
      if (v.body === '' || typeof v.body !== typeof '') {
        this.error['body'] = 'validation.body.empty'
        return false
      }
      return true
    },
    send() {
      if (!this._validate()) {
        return false
      }
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

.error {
  border-color: $error-color !important;
}
.error-message {
  color: $error-color;
}
</style>
