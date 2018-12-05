<template>
  <Content>
    <Header />
    <div class="compose-body">
      <input
        v-model="newMessage.to"
        :placeholder="$t('mail.to')"
        :class="{ error: error.to }"
        type="text"
        class="to"
        @blur="_validate"
      />
      <input
        v-model="newMessage.subject"
        :placeholder="$t('mail.subject')"
        :class="{ error: error.subject }"
        class="subject"
        type="text"
        @blur="_validate"
      />

      <textarea
        v-model="newMessage.body"
        :placeholder="$t('mail.body')"
        :class="{ error: error.body }"
        class="body"
        @blur="_validate"
      ></textarea>

      <div class="actions">
        <Button class="gray no-border" @click.native="send">
          <span v-once>{{ $t('mail.send') }}</span>
        </Button>
        <Button class="gray no-border" @click.native="resetForm">
          <span v-once>{{ $t('mail.discard') }}</span>
        </Button>
      </div>
    </div>
  </Content>
</template>

<script>
import Content from '~/components/Content'
import Header from '~/components/Header'
import Button from '~/components/Button'
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters({
      currentUserEmail: 'user/email'
    })
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
      this.newMessage.from = this.currentUserEmail
      this.$store
        .dispatch('mail/sendMail', this.newMessage)
        .then(() => alert(this.$t('message.sent')))
        .catch(() => alert(this.$t('message.failed')))
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

<style scoped lang="sass">
@import '~assets/colors'
@import '~assets/dimensions'

.compose-body
  padding: $compose-body-padding
  display: flex
  flex-direction: column
  flex: 1 auto
  input,textarea
    border: none
    padding: $compose-body-padding
    background-color: transparent
    border-bottom: 1px solid $white
    flex: 1 auto
    max-height: $compose-body-input-max-height
    resize: none
    &::placeholder
      color: $white
      opacity: 1
  textarea
      max-height: unset
  .actions
    display: flex
    flex-direction: row
    align-self: flex-end
    .Button
      margin: $compose-body-actions-margin

.error
  border-color: $error-color !important
</style>
