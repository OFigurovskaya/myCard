<script setup>
import BaseHeader from "./components/BaseHeader.vue";
import BaseFooter from "./components/BaseFooter.vue";
</script>

<template>
  <div class="wrapper">
    <BaseHeader />
    <div class="main">
      <router-view />
    </div>
      <BaseFooter />
    </div>
</template>

<style lang="scss">
@use "../src/assets/style" as *;
</style>