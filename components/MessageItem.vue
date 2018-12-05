<template>
  <div class="MessageItem-wrapper">
    <div :key="item.time" class="MessageItem">
      <div>
        <h5 class="label">{{ $t('mail.subject') }}:</h5>
        <span>{{ item.subject }}</span>
      </div>
      <div>
        <h5 class="label">{{ $t(item.translationString) }}:</h5>
        <span>{{ item.dest }}</span>
      </div>
      <p class="label body">{{ item.body }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: { type: Object, default: () => {} }
  },
  created() {
    const currentUserEmail = this.$store.state.user.current.email
    if (currentUserEmail === this.item.to) {
      this.item.dest = this.item.from
      this.item.translationString = 'mail.from'
    } else {
      this.item.dest = this.item.to
      this.item.translationString = 'mail.to'
    }
  }
}
</script>
<!--TODO-->
<!-- HOW we can resolve this issue ? we should define global css because we
need messageItem styles in parent component.-->
<style lang="sass">
@import '~assets/colors'
@import '~assets/dimensions'
@import '~assets/mixins'

.MessageItem-wrapper
  width: 100%
  display: flex
  flex-direction: column
  align-items: center


.MessageItem
  @include border-radius($default-radius)
  background-color: $white
  color: $black
  width: 90%
  display: flex
  flex-direction: column
  align-items: flex-start
  padding: 0.5rem 0 0.7rem 0
  margin: 0.5rem 0
  &.centered
    align-items: center
  div
    margin: 0.2rem 0 0.2rem 0
  .label
    margin: 1rem
    display: inline
  .body
    text-align: left
</style>
