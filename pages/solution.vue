<template>
  <section class="solution-banner">
    <div class="main-container solution-banner-wrap flex align-center">
      <div class="left-content">
        <h2 class="mb-20">降低行业合规的难度与成本，为汽车、医疗技术、航空和国防行业提供优质解决方案</h2>
        <p class="left-desc">通过可配置化的产品底层架构来满足细分行业90%以上的个性化需求，提高生产力，加快业务发展。</p>
      </div>

      <img src="~/assets/img/images/solution_banner.png" alt="" class="right-img" />
    </div>
  </section>

  <section>
    <div class="main-container page-nav flex">
      <div id="AutomotiveNav" class="nav-block" @click="scrollToSection('AutomotiveNavSection')">
        <i class="iconfont icon-solution-roadster-line"></i>
        <div class="nav-name mt-10">汽车行业</div>
      </div>
      <div id="MedicalNav" class="nav-block" @click="scrollToSection('MedicalNavSection')">
        <i class="iconfont icon-solution-medicine-bottle-line"></i>
        <div class="nav-name mt-10">医疗技术</div>
      </div>
      <div id="AviationMilitaryNav" class="nav-block" @click="scrollToSection('AviationMilitaryNavSection')">
        <i class="iconfont icon-solution-flight-takeoff-line"></i>
        <div class="nav-name mt-10">航空军工</div>
      </div>
      <div id="ConsumerElectronicsNav" class="nav-block" @click="scrollToSection('ConsumerElectronicsNavSection')">
        <i class="iconfont icon-solution-cellphone-line"></i>
        <div class="nav-name mt-10">消费电子</div>
      </div>
      <div id="SoftwareNav" class="nav-block" @click="scrollToSection('SoftwareNavSection')">
        <i class="iconfont icon-solution-terminal-box-line"></i>
        <div class="nav-name mt-10">软件行业</div>
      </div>
    </div>
  </section>

  <section id="AutomotiveNavSection" class="swimlane bg-gray animate wow fadeIn" data-wow-duration="2s">
    <div class="main-container flex justify-between align-start">
      <div class="img-wrap"><img src="~/assets/img/images/solution_1.png" alt="" /></div>
      <div class="content-wrap">
        <div class="content-title">
          <span class="mr-4">汽车行业</span>
          <span class="en-title">ISO26262 / ASPICE</span>
        </div>
        <div class="content-desc">
          汽车行业的产品开发需要符合法规要求的汽车软件。Drome
          ALM汽车行业解决方案旨在包括支持汽车产品开发中的安全关键标准和法规的关键框架，通过ISO 26262认证，能够满足复杂的需求管理需求。
        </div>
      </div>
    </div>
  </section>

  <section id="MedicalNavSection" class="swimlane animate wow fadeIn" data-wow-duration="2s">
    <div class="main-container flex justify-between align-start">
      <div class="content-wrap">
        <div class="content-title">
          <span class="mr-4">医疗技术</span>
          <span class="en-title">ISO13485 / ISO14971</span>
        </div>
        <div class="content-desc">
          Drome ALM
          医疗技术解决方案是一个功能强大的平台，可供医疗器械团队管理器械需求和相关风险的设计控制，简化监管提交和审计准备，同时加快上市时间。
        </div>
      </div>
      <div class="img-wrap"><img src="~/assets/img/images/solution_2.png" alt="" /></div>
    </div>
  </section>

  <section id="AviationMilitaryNavSection" class="swimlane bg-gray animate wow fadeIn" data-wow-duration="2s">
    <div class="main-container flex justify-between align-start">
      <div class="img-wrap"><img src="~/assets/img/images/solution_3.png" alt="" /></div>
      <div class="content-wrap">
        <div class="content-title">
          <span class="mr-4">航空军工</span>
          <span class="en-title">DO-178C / DO-254</span>
        </div>
        <div class="content-desc">
          开箱即用航空需求管理解决方案支持机载系统硬件和软件开发中的关键安全关键标准和法规，并为快速部署而设计。
        </div>
      </div>
    </div>
  </section>

  <section id="ConsumerElectronicsNavSection" class="swimlane animate wow fadeIn" data-wow-duration="2s">
    <div class="main-container flex justify-between align-start">
      <div class="content-wrap">
        <div class="content-title">消费电子</div>
        <div class="content-desc">
          通过统一您的工业制造软件和硬件开发流程来管理日益增加的复杂性并保持团队之间的一致性，以加快上市速度并简化风险管理
        </div>
      </div>
      <div class="img-wrap"><img src="~/assets/img/images/solution_4.png" alt="" /></div>
    </div>
  </section>

  <section id="SoftwareNavSection" class="swimlane bg-gray animate wow fadeIn" data-wow-duration="2s">
    <div class="main-container flex justify-between align-start">
      <div class="img-wrap"><img src="~/assets/img/images/solution_5.png" alt="" /></div>
      <div class="content-wrap">
        <div class="content-title">软件行业</div>
        <div class="content-desc">
          Drome
          ALM是一个全生命周期平台，软件开发团队可以在该平台上构建复杂的业务关键型解决方案，同时使用与瀑布式、敏捷、规模化敏捷和其他方法相一致的框架和模板加快上市时间。
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
function scrollToSection(targetId: string) {
  let target = document.getElementById(targetId)
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 50,
      behavior: 'smooth',
    })
  }
}
</script>

<style scoped lang="scss">
.solution-banner {
  background-color: #25252b;
  .solution-banner-wrap {
    height: 325px;
    color: #fff;
    position: relative;
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
      top: 50px;
      right: 0;
      opacity: 0.1;
    }
  }
}

.top-banner {
  position: relative;
  img {
    width: 100%;
  }
  .content-wrap {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .left-desc {
      font-size: 16px;
    }
    &.font-white {
      color: #fff;
    }
  }
}
</style>
