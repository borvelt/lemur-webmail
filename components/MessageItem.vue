<template>
  <div class="message-item-wrapper">
    <div :key="item.time" class="message-item">
      <div>
        <h5 class="label">{{ $t('text.mail.subject') }}</h5>
        <span>{{ item.subject }}</span>
      </div>
      <div>
        <h5 class="label">{{ $t(item.translationString) }}</h5>
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
      this.item.translationString = 'text.mail.from'
    } else {
      this.item.dest = this.item.to
      this.item.translationString = 'text.mail.to'
    }
  }
}
</script>
<!--TODO-->
<!-- HOW we can resolve this issue ? we should define global css because we
need messageItem styles in parent directory.-->
<style lang="scss">
@import '~assets/colors';

.message-item-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.message-item {
  width: 90%;
  background-color: $white;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  color: $black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0 0.7rem 0;
  margin: 0.5rem 0 0.5rem 0.1px;
}

.message-item.centered {
  align-items: center;
}

.message-item div {
  margin: 5px 0 5px 0;
}

.message-item .label {
  margin: 0 10px 0 3px;
  display: inline;
}

.message-item .body {
  text-align: left;
}
</style>
