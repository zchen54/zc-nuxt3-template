<template>
  <section class="home-banner">
    <div class="main-container flex banner-row">
      <div class="left-content flex-column">
        <div>
          <h1>需求研发管理</h1>
          <h2 class="mt-10">质量/效率/合规</h2>
        </div>
        <div class="lead mt-10 mb-16">Collaboration, traceability, security.</div>
        <div class="flex">
          <a href="http://dromeai.com/dr/register" class="mr-10">
            <div class="main-button btn-download-lg">在线试用</div>
          </a>
          <NuxtLink to="/pricing">
            <div class="main-button btn-download-lg">获取授权</div>
          </NuxtLink>
        </div>
        <div class="assignment mt-20">
          <p>By using Drome, you agree to its</p>
          <NuxtLink to="/license">license and privacy statement.</NuxtLink>
        </div>
      </div>
      <div class="right-content">
        <img src="~/assets/img/images/screenshot.png" alt="Drome 截图" class="screenshot" />
      </div>
    </div>
  </section>

  <section>
    <div class="main-container page-nav flex">
      <div id="RequirementNav" class="nav-block" @click="scrollToSection('RequirementNavSection')">
        <i class="iconfont icon-requirement"></i>
        <div class="nav-name mt-4">需求管理</div>
      </div>
      <div id="QualityNav" class="nav-block" @click="scrollToSection('QualityNavSection')">
        <i class="iconfont icon-quality"></i>
        <div class="nav-name mt-4">测试管理</div>
      </div>
      <div id="RiskNav" class="nav-block" @click="scrollToSection('RiskNavSection')">
        <i class="iconfont icon-risk"></i>
        <div class="nav-name mt-4">风险管理</div>
      </div>
      <div id="CodeNav" class="nav-block" @click="scrollToSection('CodeNavSection')">
        <i class="iconfont icon-code"></i>
        <div class="nav-name mt-4">代码管理</div>
      </div>
      <div id="DevelopmNav" class="nav-block" @click="scrollToSection('DevelopmNavSection')">
        <i class="iconfont icon-developm"></i>
        <div class="nav-name mt-4">研发管理</div>
      </div>
    </div>
  </section>

  <section id="RequirementNavSection" class="swimlane animate wow fadeIn" data-wow-duration="2s">
    <div class="main-container flex justify-between align-start">
      <div class="img-wrap"><img src="~/assets/img/images/home_sec_requirement.png" alt="" /></div>
      <div class="content-wrap">
        <div class="content-title">需求生命周期管理</div>
        <div class="content-desc">
          1. 需求生命周期管理，一站式解決方案。包括需求、研发、测试、风险、源码和发布。<br />
          2. 将工作项链接到测试用例，全面了解需求上的变化，实现从需求到测试的可追溯性。<br />
          3. 重视结果也注重过程数据，着眼于企业级知识资产复用，以提高团队研发能力的方式，提升研发效率。
        </div>
      </div>
    </div>
  </section>

  <section id="QualityNavSection" class="swimlane bg-gray animate wow fadeIn" data-wow-duration="2s">
    <div class="main-container flex justify-between align-start">
      <div class="content-wrap">
        <div class="content-title">测试和质量管理</div>
        <div class="content-desc">
          1. 可自定义测试用例/测试集属性、测试步骤，能够适配不同的业务场景。<br />
          2. 测试执行详细记录测试过程，以便管理者进行工作量化、测试人员合理安排工作时间。<br />
          3. 支持查看需求和迭代的测试覆盖率，直观衡量需求和迭代测试的充分性和完整性。<br />
          4. 自动生成测试结果报告，快速评估版本质量。
        </div>
      </div>
      <div class="img-wrap"><img src="~/assets/img/images/home_sec_test.png" alt="" /></div>
    </div>
  </section>

  <section id="RiskNavSection" class="swimlane animate wow fadeIn" data-wow-duration="2s">
    <div class="main-container flex justify-between align-start">
      <div class="img-wrap"><img src="~/assets/img/images/home_sec_risk.png" alt="" /></div>
      <div class="content-wrap">
        <div class="content-title">风险管理</div>
        <div class="content-desc">
          1. 识别和评估风险，确保在需求执行过程中使用实时数据进行风险分析。<br />
          2. 通过将风险和需求关联，轻松地对风险进行覆盖和追踪。<br />
          3. 通过符合行业标准的框架来进行设计，建立全面的风险管理档案，确保复杂产品开发的质量和安全。
        </div>
      </div>
    </div>
  </section>

  <section id="CodeNavSection" class="swimlane bg-gray animate wow fadeIn" data-wow-duration="2s">
    <div class="main-container flex justify-between align-start">
      <div class="content-wrap">
        <div class="content-title">代码管理</div>
        <div class="content-desc">
          1. 多维度、细粒度的权限体系，满足企业在不同场景下对数字资产管理和控制的需求。<br />
          2.
          代码提交和需求或工作项自动关联。使得需求和工作项可追溯、可量化。这些数据在项目复盘、资源评估、质量和风险评估等环节都是重要的依据。<br />
          3. 通过强大的Fork/Pull Request（合并请求）功能进行审核、追踪和代码核准。
        </div>
      </div>
      <div class="img-wrap"><img src="~/assets/img/images/home_sec_code.png" alt="" /></div>
    </div>
  </section>

  <section id="DevelopmNavSection" class="swimlane animate wow fadeIn" data-wow-duration="2s">
    <div class="main-container flex justify-between align-start">
      <div class="img-wrap"><img src="~/assets/img/images/home_sec_develop.png" alt="" /></div>
      <div class="content-wrap">
        <div class="content-title">研发管理</div>
        <div class="content-desc">
          1. 工作流程高度可定制化，适用于不同行业，不同业务场景。<br />
          2. 延续用户使用Word和Excel的操作习惯，在统一的视图下输入和修改，提高输入效率。<br />
          3. 满足多行业、多角色、多场景的一站式协作，促进知识型组织建设。<br />
          4. 内置敏捷、瀑布、V字研发流程，以及汽车、医疗器械、航空军工等行业解决方案。
        </div>
      </div>
    </div>
  </section>

  <section id="Download" class="swimlane">
    <div class="main-container download-wrap flex flex-center">
      <div class="content-item">
        <div class="logo-win"></div>
        <a href="assets/release/drome_windows.zip">
          <div class="main-button btn-download">
            <div class="btn-main">
              <i class="iconfont icon-download"></i>
              <span class="ml-4">下载</span>
            </div>
            <div class="t-small">Windows 8, 10, 11</div>
          </div>
        </a>
      </div>
      <div class="content-item">
        <div class="logo-linux"></div>
        <a href="assets/release/drome_linux.bin">
          <div class="main-button btn-download linux">
            <div class="btn-main">
              <i class="iconfont icon-download"></i>
              <span class="ml-4">下载 Linux</span>
            </div>
            <div class="t-small">Debian, Ubuntu, Red Hat, Fedora, SUSE</div>
          </div>
        </a>
      </div>
      <!-- <div class="content-item">
          <div class="logo-mac"></div>
          <a href="#">
            <div class="main-button btn-download">
              <div class="btn-main">
                <i class="iconfont icon-download"></i>
                <span class="ml-4">下载</span>
              </div>
              <div class="t-small">macOS 10.11+</div>
            </div>
          </a>
        </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
console.log(import.meta.env)

const route = useRoute()
onMounted(async () => {
  if (route.query.target) {
    setTimeout(() => {
      scrollToSection(route.query.target as string)
    }, 50)
  }
})

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
.news-line {
  background-color: #25252b;
  overflow: hidden;
  .news-content {
    margin: 11px auto;
    padding: 0 12%;
    font-size: 16px;
    color: #ccc;
    line-height: 22px;
    text-align: center;
  }
}

.home-banner {
  color: #fff;
  background-color: #2c2c32;
  min-height: 526px;
  .banner-row {
    padding: 45px 0;
  }
  .left-content {
    width: 35%;
    padding: 42px 15px 0 15px;
    align-items: center;
    text-align: center;
    h1 {
      font-size: 50px;
      font-weight: normal;
    }
    h2 {
      font-size: 30px;
    }
    .lead {
      font-size: 18px;
      color: $color_f6;
    }
    .btn-download-lg {
      width: 180px;
      height: 50px;
      font-size: 18px;
      i {
        font-size: 18px;
      }
    }
    .assignment {
      font-size: 12px;
      line-height: 20px;
    }
  }
  .right-content {
    width: 65%;
    padding: 0 30px;
    .screenshot {
      width: 100%;
    }
  }
}

.certificate-wrap {
  .cer-title {
    margin-top: 20px;
    margin-bottom: 35px;
    font-size: 30px;
    line-height: 1.1;
    text-align: center;
  }
  .cer-list {
    img {
      width: 200px;
      margin: 0 10px;
    }
  }
}

.download-wrap {
  .content-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;
    .logo-win {
      height: 100px;
      width: 100px;
      background-size: contain !important;
      background: url('@/assets/img/images/windows-logo.png') center center no-repeat;
    }
    .logo-linux {
      height: 100px;
      width: 100px;
      background-size: contain !important;
      background: url('@/assets/img/images/linux-logo.png') center center no-repeat;
    }
    .logo-mac {
      height: 100px;
      width: 100px;
      background-size: contain !important;
      background: url('@/assets/img/images/apple-logo.svg') center center no-repeat;
    }
    .btn-download {
      margin-top: 24px;
      display: block;
      width: 240px;
      height: auto;
      .btn-main {
        font-size: 18px;
        i {
          font-size: 18px;
        }
      }
      .t-small {
        font-size: 14px;
        white-space: nowrap;
      }
      &.linux {
        width: 300px;
      }
    }
  }
}
</style>
