<template>
  <Content>
    <div class="about-body">
      <H1>{{ $t('lemur.about') }}</H1>
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
  }
}
</script>

<style scoped lang="scss">
@import '~assets/defaults';

.Content {
  justify-content: center;
}
.about-body {
  width: 100%;
  font-family: $title-font;
}
</style>
