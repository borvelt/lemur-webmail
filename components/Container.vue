<template>
  <div class="Container"><slot /></div>
</template>

<style lang="scss">
@import '~assets/colors';

.Container {
  background-color: $green;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
