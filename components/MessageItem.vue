<template>
  <div class="MessageItem-wrapper">
    <div :key="item.time" class="MessageItem">
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
@import '~assets/dimensions';

.MessageItem-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.MessageItem {
  width: 90%;
  background-color: $white;
  -webkit-border-radius: $default-radius;
  -moz-border-radius: $default-radius;
  border-radius: $default-radius;
  color: $black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0 0.7rem 0;
  margin: 0.5rem 0 0.5rem 0.1px;
}

.MessageItem.centered {
  align-items: center;
}

.MessageItem div {
  margin: 5px 0 5px 0;
}

.MessageItem .label {
  margin: 0 10px 0 3px;
  display: inline;
}

.MessageItem .body {
  text-align: left;
}
</style>
