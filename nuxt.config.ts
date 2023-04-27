// https://nuxt.com/docs/api/configuration/nuxt-config
import { loadEnv } from 'vite'
// console.log('请求接口地址', loadEnv(process.argv[process.argv.length - 1], './env'))
const mode = process
// console.log('mode',mode)

export default defineNuxtConfig({
  css: ['element-plus/dist/index.css', '@/assets/fonts/iconfont.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/default.scss" as *;',
        },
      },
    },
  },
  // app: {
  //   head: {
  //     script: [{ src: '@/assets/fonts/iconfont.js', type: 'text/javascript' }],
  //   },
  // },
})
