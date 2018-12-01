<template>
  <A :to="to"><slot /></A>
</template>

<script>
import A from '~/components/A'
export default {
  components: {
    A
  },
  props: {
    to: {
      type: [String, Object],
      default: function() {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '~assets/colors';
@import '~assets/dimensions';

a {
  color: #fff;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid;
  text-decoration: none;
  box-sizing: border-box;
  padding: $padding-buttons;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
}

a:hover {
  color: #fff;
}

.green {
  background-color: $green;
}

.green:hover {
  background-color: $dark-green;
}

.gray {
  background-color: $gray;
}

.gray:hover {
  background-color: $dark-gray;
}
</style>
