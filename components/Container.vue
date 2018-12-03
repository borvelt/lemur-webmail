<template>
  <div class="Container"><slot /></div>
</template>

<style lang="scss">
@import '~assets/colors';

.Container {
  background-color: $green;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
