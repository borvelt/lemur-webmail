<template>
  <Content>
    <div class="about-body">
      <div v-show="loading">
        <H1>{{ $t('lemur.about') }}</H1>
        <img :src="yesNo" class="yes-no-wtf" alt="yes-no-wtf" @load="loaded" />
      </div>
      <div v-show="!loading">{{ $t('message.pleaseWait') }}</div>
    </div>
  </Content>
</template>

<script>
import Content from '~/components/Content'
import H1 from '~/components/H1'

export default {
  components: {
    Content,
    H1
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    loaded() {
      this.$nextTick(() => {
        this.loading = true
      })
    }
  },
  async asyncData({ app }) {
    const { data } = await app.$axios.get('https://yesno.wtf/api?force=yes')
    return { yesNo: data.image }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/defaults';

.yes-no-wtf {
  margin-top: 1rem;
  width: 50%;
}

.Content {
  justify-content: center;
}
.about-body {
  width: 100%;
  font-family: $title-font;
}
</style>
