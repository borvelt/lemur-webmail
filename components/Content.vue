<template>
  <div class="content">
    <slot />
  </div>
</template>

<style lang="scss">
@import '~assets/colors';
.content {
  color: #fff;
  background-color: $gray;
  min-height: 85vh;
  width: 60vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 3px 3px 20px #111;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 5px;
}
</style>
