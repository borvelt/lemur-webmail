<template>
  <div class="Content"><slot /></div>
</template>

<style lang="scss">
@import '~assets/colors';

.Content {
  color: #fff;
  background-color: $gray;
  min-height: 85vh;
  width: 60vw;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
  box-shadow: 3px 3px 20px #111;
  -webkit-border-radius: 0.4rem;
  -moz-border-radius: 0.4rem;
  border-radius: 0.4rem;
}
</style>
