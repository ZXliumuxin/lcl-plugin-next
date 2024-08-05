import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { zhNavbar } from "./navbar/zh"
import { enNavbar } from "./navbar/en"
import { zhSidebar } from "./sidebar/zh"
import { enSidebar } from "./sidebar/en"
// 导入插件
import { demoBlockPlugin } from "@ddongui/vuepress-plugin-demo-block";
import path from "path";


export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  theme: defaultTheme({
    logo: "images/hero.png",
    locales: {
      "/": {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        navbar: zhNavbar,
        sidebar: zhSidebar,
        notFound: ['没找到', '网页走丢了'],
        backToHome: '返回首页'
      },
      "/en/": {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        navbar: enNavbar,
        sidebar: enSidebar,
        notFound: ['没找到en', '网页走丢了en'],
        backToHome: '返回首页en'

      }
    }
  }),
  head: [['link', { rel: 'icon', href: './public/images/hero.png' }]],
  lang: 'zh-CN',
  locales: {
    '/': {
      selectLanguageName: '简体中文',
      title: 'lcl-plugin-next',
      description: 'lcl-plugin-next 的文档',
    },
    '/en/': {
      selectLanguageName: 'English',
      title: 'lcl-plugin-next',
      description: 'lcl-plugin-next 的文档',
    },
  },
  // 使用插件
  plugins: [demoBlockPlugin({
    // 必须使用绝对路径， 在您的 config.ts 起始路径开始
    examplesPath: path.resolve(__dirname, "../examples")
  })],
  base: "/"
})