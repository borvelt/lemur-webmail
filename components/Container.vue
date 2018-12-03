<template>
  <div class="container"><slot /></div>
</template>

<style lang="scss">
@import '~assets/colors';
.container {
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
