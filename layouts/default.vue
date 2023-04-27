<template>
  <div>snow-default-layout</div>
  <div class="mb-20">
    <NuxtLink to="/" class="mr-20">首页</NuxtLink>
    <NuxtLink to="/about">关于我们</NuxtLink>
  </div>
  <slot />
</template>

<script setup lang="ts"></script>

<style lang="scss">
div {
  font-weight: normal;
}
</style>
