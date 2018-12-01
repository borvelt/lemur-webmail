<template>
  <div class="logo-wrapper">
    <img :alt="$t('text.title')" src="~/static/lemur.png" />
  </div>
</template>

<style scoped>
img {
  width: 100%;
}
.logo-wrapper {
  flex: 1 auto;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
