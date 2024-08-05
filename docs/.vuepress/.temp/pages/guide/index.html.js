import comp from "E:/shangchuan/test-button/docs/.vuepress/.temp/pages/guide/index.html.vue"
const data = JSON.parse("{\"path\":\"/guide/\",\"title\":\"lcl-plugin-next\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"lcl-plugin-next\",\"description\":\"lcl-plugin-next 插件库\",\"base\":\"/guide\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/images/hero.png\"}]]},\"headers\":[],\"git\":{},\"filePathRelative\":\"guide/index.md\"}")
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
