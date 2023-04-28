<template>
  <section class="about-banner">
    <div class="main-container about-banner-wrap flex align-center">
      <div class="left-content">
        <h2 class="mb-20">打造一款能真正帮助团队提高研发能力的工具。</h2>
        <h2 class="mb-20"></h2>
        <p class="left-desc">实时追溯 | 高复用 | 快速交付 | 质量和合规</p>
      </div>

      <img src="~/assets/img/images/about_banner.png" alt="" class="right-img" />
    </div>
  </section>

  <section class="normal-section main-container">
    <p class="section-title about-title">关于我们</p>

    <div class="company-container">
      <div class="left-content">
        <p class="t-title mb-16">企业简介</p>
        <p class="t-content">
          苏州循迹科技有限公司成立于2021年10月14日，注册地位于中国（江苏）自由贸易试验区苏州片区苏州工业园区星港街199号东方之门大厦2幢。
        </p>
        <p class="t-title mb-16">企业愿景</p>
        <p class="t-content">
          构建一个有效的平台，助力企业企业级知识资产复用、研发效率的提高、研发能力的提升。已有知识和经验是进一步学习的基础，沉淀是搭建成长的阶梯，复用是效率有效提升的关键。我们把每个需求的执行过程作为企业重要的知识资产，并让这些资产成为团队能力提升的基础，不停地进行沉淀，为未来的成功助力。
        </p>
      </div>
    </div>
  </section>

  <section id="Contact" class="main-container normal-section contact-section">
    <p class="section-title about-title">联系我们</p>

    <div class="content-wrap mb-50">
      <div class="mb-20 flex align-center">
        <i class="iconfont icon-map-pin-fill"></i>
        <span class="ml-10">苏州工业园区星港街199号东方之门大厦2幢</span>
      </div>
      <div class="mb-20 flex align-center">
        <i class="iconfont icon-mail-fill"></i>
        <a href="mailto:sales@dromeai.com" class="ml-10">sales@dromeai.com</a>
      </div>
      <div class="mb-20 flex align-center">
        <i class="iconfont icon-phone-fill"></i>
        <a href="tel:18012645895" class="ml-10">+86 18012645895</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
onMounted(async () => {
  if (route.query.target) {
    let target = document.getElementById(route.query.target as string)
    setTimeout(() => {
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: 'smooth',
        })
      }
    }, 50)
  }
})
</script>

<style scoped lang="scss">
.about-banner {
  background-color: #25252b;
  .about-banner-wrap {
    height: 325px;
    color: #fff;
    position: relative;
    overflow: hidden;
    .left-content {
      width: 500px;
      margin-top: -20px;
      font-size: 18px;
      margin-left: 40px;
      .left-desc {
        font-size: 16px;
      }
    }
    .right-img {
      position: absolute;
      width: 100%;
      top: 0;
      right: 0;
      opacity: 0.5;
    }
  }
}

.about-title {
  padding-bottom: 30px;
  margin-bottom: 40px;
  border-bottom: 1px solid #dadde3;
}

.normal-section {
  overflow: hidden;
  background: white;
}
.section-title {
  margin: 50px auto;
  font-size: 30px;
  color: #333;
  text-align: center;
  line-height: 42px;
}
.company-container {
  margin-bottom: 52px;
  display: flex;
  justify-content: space-between;
  .left-content {
    .t-title {
      position: relative;
      padding-left: 10px;
      font-size: 18px;
      color: #000;
      line-height: 25px;
      &::before {
        position: absolute;
        content: '';
        left: 0;
        top: 50%;
        width: 2px;
        height: 16px;
        background: #008cd3;
        transform: translateY(-50%);
      }
    }
    .t-content {
      margin-bottom: 28px;
      font-size: 14px;
      color: #666;
      line-height: 20px;
      text-indent: 28px;
    }
  }
}

.contact-section {
  color: #333;
  a {
    color: #333;
    outline: none;
  }
}
</style>
