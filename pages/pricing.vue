<template>
  <section class="main-container page-main-wrap pricing-container">
    <div class="pricing-header text-center">
      <div class="content-label">Choose the right license plans for your business</div>
      <div class="content-title">为您的业务选择适合的授权计划</div>
      <p class="content-desc">Lifecycle Management platforms for collaboration, traceability, security, and process management.</p>
    </div>

    <div class="pricing-wrapper flex">
      <div v-for="(item, index) in pricing" :key="index" class="pricing-card flex-1 flex-column">
        <div class="card-header">
          <h4 class="flex align-end">
            {{ item.name }}
            <span v-if="item.minMember" class="min-member ml-12">{{ item.minMember }}人起售</span>
          </h4>
          <p>{{ item.description }}</p>
        </div>
        <div class="card-price">
          <span>¥</span>
          {{ item.price }}
          <small>/人月</small>
        </div>
        <div class="card-content flex-1">
          <div v-for="(right, rIndex) in item.rights" :key="rIndex" class="right-item">
            <i class="iconfont icon-gougou"></i>
            <span>{{ right }}</span>
          </div>
        </div>
        <div class="card-footer">
          <div class="main-button btn-buy" :class="{ 'for-free': index === 0 }" @click="handleBuy(item, index)">
            {{ index === 0 ? '免费使用' : '订阅版本' }}
          </div>
          <div v-if="index === 1" class="tx-sans" style="color: #000">免费试用30天，请点击“订阅版本”联系我们</div>
          <div v-else class="tx-sans">{{ item.footer }}</div>
        </div>
      </div>
    </div>

    <client-only>
      <el-dialog v-model="dialogVisible" title="订阅版本" width="540">
        <el-result v-if="submitSuccess" icon="success" title="提交成功" sub-title="我们将在稍后联系您"> </el-result>
        <el-form v-else ref="ruleFormRef" :model="buyForm" :rules="formRules" label-width="100px">
          <el-form-item label="订阅版本">
            {{ buyForm.versionName }}
          </el-form-item>
          <el-form-item label="联系人" prop="contact">
            <el-input v-model="buyForm.contact" placeholder="请输入联系人" />
          </el-form-item>
          <el-form-item label="联系方式" prop="phone">
            <el-input v-model="buyForm.phone" placeholder="请输入联系方式" />
          </el-form-item>
          <el-form-item label="邮件" prop="email">
            <el-input v-model="buyForm.email" placeholder="请输入邮件" />
          </el-form-item>
          <el-form-item label="公司名称" prop="company">
            <el-input v-model="buyForm.company" placeholder="请输入公司名称" />
          </el-form-item>
          <el-form-item label="行业" prop="industry">
            <el-select v-model="buyForm.industry" class="w-100" placeholder="请选择行业">
              <el-option v-for="(item, index) in industryOpts" :key="index" :label="item" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item label="备注" prop="remark">
            <el-input v-model="buyForm.remark" type="textarea" :rows="3" placeholder="请输入备注" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button v-if="submitSuccess" type="primary" @click="close">确定</el-button>
            <template v-else>
              <el-button @click="close">取消</el-button>
              <el-button type="primary" :loading="submitLoading" @click="onConfirm">确定</el-button>
            </template>
          </span>
        </template>
      </el-dialog>
    </client-only>
  </section>

  <section class="pricing-footer-banner">
    <div class="main-container text-center">
      <h2 class="mb-12">Drome - 企业级需求研发管理工具</h2>
      <p class="mb-24">联系我们，获取行业解决方案与产品试用</p>
      <div class="flex flex-center">
        <a href="mailto:sales@dromeai.com?subject=Drome ALM 预约演示" class="mr-20"><div class="main-button">预约演示</div></a>
        <NuxtLink :to="{ name: 'about', query: { target: 'Contact' } }"><div class="light-button">联系我们</div></NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { submitPurchase } from '@/utils/api'
import type { FormInstance, FormRules } from 'element-plus'

const pricing = [
  {
    name: '免费版',
    edition: 0,
    description: '团队研发全流程管理，永久免费。',
    price: 0,
    rights: ['个人百科 / 项目百科', '文档管理 - 共享项目知识', '专业的需求管理', '专业的测试管理', '发布和迭代管理', '代码仓库管理'],
    footer: '永久免费，不限人数',
  },
  {
    name: '专业版',
    edition: 1,
    description: '复杂产品和跨项目协作的研发全流程管理。',
    price: 125,
    minMember: 10,
    rights: [
      '包含免费版所有功能，以及，',
      '研发流程和工作流定制化',
      '需求可追溯性',
      '测试覆盖率',
      '代码提交和任务关联',
      '历史及基线管理',
      '文档式阅读模式',
      '风险管理',
      '变更管理和可疑链接',
    ],
    footer: '全生命周期覆盖，性价比之选',
  },
  {
    name: '旗舰版',
    edition: 2,
    description: '高质量和有合规要求的产品智能研发平台。',
    price: 249,
    minMember: 10,
    rights: [
      '包含专业版所有功能，以及，',
      '需求文档导入功能',
      '静态代码分析',
      '行业合规解决方案模板',
      '数据审计',
      '高级定制化',
      '价值分析和决策支持',
      '强大灵活的API',
      '行业合规模板市场',
      '专属售后服务和客户成功',
    ],
    footer: '功能不断更新和完善，参见最新公告',
  },
]

const route = useRoute()
onMounted(async () => {
 console.log('-------------- route: ', route.name)
})

const ruleFormRef = ref<FormInstance>()
const dialogVisible = ref(false)
const submitLoading = ref(false)
const dialogShow = ref(false)
const submitSuccess = ref(false)
const formRules = ref<FormRules>({
  contact: [{ required: true, message: '联系人不能为空', trigger: 'change' }],
  phone: [
    { required: true, message: '联系方式不能为空', trigger: 'change' },
    {
      required: false,
      pattern: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur',
    },
  ],
  email: [
    { required: true, message: '邮件不能为空', trigger: 'change' },
    {
      pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      message: '请输入正确的邮箱',
      trigger: 'blur',
    },
  ],
  company: [{ required: true, message: '公司名称不能为空', trigger: 'change' }],
  industry: [{ required: true, message: '行业不能为空', trigger: 'change' }],
})
const industryOpts = ref([
  '航空航天/国防',
  '汽车',
  '消费电子',
  '能源工具',
  '财务 / 保险',
  '卫生保健',
  '工业技术',
  '医疗器械 / 生命科学',
  '半导体',
  '软件',
  '通信',
  '其他',
])
let buyForm = reactive({
  versionName: '',
  edition: '',
  contact: '',
  phone: '',
  email: '',
  company: '',
  industry: '航空航天/国防',
  remark: '',
})

function handleBuy(item: any, index: number) {
  console.log(item, index)
  if (index > 0) {
    buyForm.versionName = item.name
    buyForm.edition = item.edition
    dialogVisible.value = true
    // setTimeout(() => {
    //   dialogShow.value = true
    // }, 50)
  }
}

function close() {
  dialogVisible.value = false
  dialogShow.value = false
  submitSuccess.value = false
  buyForm = reactive({
    versionName: '',
    edition: '',
    contact: '',
    phone: '',
    email: '',
    company: '',
    industry: '航空航天/国防',
    remark: '',
  })
}

function onConfirm() {
  ruleFormRef.value &&
    ruleFormRef.value.validate((valid, fields) => {
      if (valid) {
        console.log('submit!')
        const { edition, contact, phone, email, company, industry, remark } = buyForm
        const data = { edition, contact, phone, email, company, industry, remark }
        submitLoading.value = true
        console.log('submit', data)
        submitPurchase(data)
          .then((res: any) => {
            console.log('res', res)
            submitLoading.value = false
            if (res) {
              submitSuccess.value = true
            }
          })
          .catch((err: any) => {
            console.log('err', err)
            submitLoading.value = false
          })
      }
    })
}
</script>

<style scoped lang="scss">
.page-main-wrap {
  min-height: calc(100vh - 124px);
}

.pricing-container {
  padding-top: 60px;
  padding-bottom: 60px;
}

.pricing-header {
  margin: 0 auto 30px;
  max-width: 70%;
  .content-label {
    font-size: 12px;
    color: $hover_color;
  }
  .content-title {
    font-size: 36px;
    color: #06072d;
  }
  .content-desc {
    font-size: 16px;
    color: #575d78;
    line-height: 1.5;
  }
}

.pricing-wrapper {
  margin-bottom: 30px;
  .pricing-card {
    width: 310px;
    flex-shrink: 0;
    margin: 0 5px;
    line-height: 1.5;
    border: 1px solid rgba(230, 231, 239, 0.85);
    border-color: rgba(224, 225, 235, 0.85);
    transition: all 0.25s;
    &:hover {
      border-color: $hover_color;
      box-shadow: 0 4px 12px 0 rgba(131, 146, 165, 0.15), 2px 2px 5px 0 rgba(60, 70, 83, 0.04);
      .card-icon {
        color: $hover_color;
      }
    }
    .card-icon {
      font-size: 32px;
    }
    .card-header {
      padding: 20px;
      border-bottom: 1px solid rgba(230, 231, 239, 0.85);
      h4 {
        margin: 10px 0;
        font-size: 24px;
        font-weight: normal;
        color: $hover_color;
        line-height: 1.2;
      }
      p {
        color: #575d78;
        font-size: 14px;
        line-height: 1.5;
      }
    }
    .min-member {
      font-size: 14px;
      color: #606266;
    }
    .card-price {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
      color: #06072d;
      font-size: 56px;
      font-family: 'Oswald', sans-serif;
      line-height: 0.6;
      border-bottom: 1px solid rgba(230, 231, 239, 0.85);
      span {
        margin-bottom: 20px;
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        color: #575d78;
      }
      small {
        margin-top: 30px;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
      }
    }
    .card-content {
      padding: 20px;
      color: #575d78;
      .right-item {
        height: 21px;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #575d78;
        line-height: 1.5;
        i {
          color: #20c997;
          margin-right: 10px;
        }
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }
    }
    .card-footer {
      padding: 20px;
      .btn-buy {
        &.for-free {
          cursor: default;
          background-color: $color_green;
          // &:hover {
          //   background-color: $hover_green;
          // }
        }
      }
      .tx-sans {
        color: #666;
        text-align: center;
        margin-top: 10px;
        font-size: 12px;
        line-height: 1.5;
      }
    }
  }
}

.pricing-footer-banner {
  padding: 40px 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  background-image: url('@/assets/img/images/pricong-bottom-bg.webp');
}
</style>
