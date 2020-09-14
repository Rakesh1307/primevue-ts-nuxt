<template>
  <div class="layout-topbar">
    <nuxt-link to="/">
      Home
    </nuxt-link>
  </div>
</template>

<style scoped>
.layout-topbar {
  background-color: white;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 997;
  border-bottom: 1px solid lightgray;
  align-items: center;
  padding: 0 35px;
  display: flex;
}
</style>
