<template>
  <Meta
    name="keywords"
    content="循迹科技, 需求, 需求管理, 研发, 研发管理, 项目管理, Drome, ALM, 循迹, 追溯, 工具, 权限管理, 变更管理, 基线, 复用, 版本规划, 应用生命周期管理"
  />

  <header class="header fixed-top">
    <div class="header-wrap main-container flex justify-between align-center">
      <div class="flex align-center">
        <NuxtLink to="/" class="logo-wrap flex align-center">
          <svg-icon name="logo" class="dr-logo"></svg-icon>
          <span class="ml-8">Drome</span>
        </NuxtLink>
        <nav class="nav-list flex align-center ml-16">
          <NuxtLink to="/" class="nav-item" :class="{ active: $route.name === 'index' }">产品</NuxtLink>
          <NuxtLink to="/solution" class="nav-item" :class="{ active: $route.name === 'solution' }">解决方案</NuxtLink>
          <NuxtLink to="/pricing" class="nav-item" :class="{ active: $route.name === 'pricing' }">价格</NuxtLink>
          <NuxtLink to="/about" class="nav-item" :class="{ active: $route.name === 'about' }">关于</NuxtLink>
        </nav>
      </div>
      <NuxtLink :to="{ name: 'index', query: { target: 'Download' } }">
        <div id="DownloadBtn" class="main-button btn-download">
          <i class="iconfont icon-download"></i>
          <span class="ml-4">下载</span>
        </div>
      </NuxtLink>
    </div>
  </header>

  <div class="under-nav"></div>

  <div class="page-main-wrap">
    <slot />
  </div>

  <footer class="footer">
    <div class="main-container footer-wrap">
      <div>
        <div class="link-list text-right mb-4">
          <a href="mailto:support@dromeai.com?subject=Drome ALM 支持与服务" class="link-item">Support</a>
          <NuxtLink to="/license" class="link-item">License</NuxtLink>
        </div>
        <div class="copyright">
          Copyright ©2021 苏州循迹科技有限公司 <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2022035372号-2</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Drome - 需求研发管理',
  ogTitle: '苏州循迹科技有限公司',
  description: 'Drome Application Lifecycle Management for Automotive',
  ogDescription: '苏州循迹科技有限公司',
})
</script>

<style lang="scss">
.header {
  height: 50px;
  background-color: #2c2c32;
  .header-wrap {
    height: 100%;
    .logo-wrap {
      color: #fff;
      font-size: 20px;
      user-select: none;
    }
    .dr-logo {
      font-size: 30px;
    }
    .nav-list {
      .nav-item {
        padding: 0 12px;
        line-height: 50px;
        font-size: 16px;
        color: #fff;
        opacity: 0.6;
        transition: opacity 0.1s linear;
        user-select: none;
        &.active,
        &:hover {
          opacity: 1;
        }
      }
    }
    .btn-download {
      height: 50px;
    }
  }
}

.footer {
  padding: 15px 0;
  background-color: #333;
  .footer-wrap {
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    .link-list {
      .link-item {
        color: #fff;
        transition: all 0.1s linear;
        &:not(:last-child) {
          margin-right: 20px;
        }
        &:hover {
          color: $hover_color;
        }
      }
    }
    .copyright {
      a {
        color: #fff;
      }
    }
  }
}
</style>
