import comp from "E:/shangchuan/test-button/docs/.vuepress/.temp/pages/2021/01/03/index.html.vue"
const data = JSON.parse("{\"path\":\"/2021/01/03/index.html\",\"title\":\"lcl-plugin-next\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"lcl-plugin-next\",\"description\":\"lcl-plugin-next 插件库\",\"date\":\"2021-01-03T00:00:00.000Z\",\"permalinkPattern\":\":year/:month/:day/:slug.html\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
