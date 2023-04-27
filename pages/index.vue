<template>
  <div class="main">
    <Title>首页</Title>
    <h1>snow</h1>
    <div class="ml-20">
      <span>矢量图标：</span>
      <i class="iconfont icon-download"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { getRegisterConfig } from '@/utils/api'
console.log(import.meta.env)

onMounted(async () => {
  console.log('onMounted')
  setTimeout(() => {
    getRegisterConfig()
      .then((res: any) => {
        console.log('res', res)
      })
      .catch((err: any) => {
        console.log('err', err)
      })
  }, 100)
})
</script>

<style scoped lang="scss">
.main {
  .icon-download {
    &:hover {
      color: blue;
    }
  }
}
</style>
