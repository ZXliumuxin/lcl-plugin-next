import comp from "E:/shangchuan/test-button/docs/.vuepress/.temp/pages/components/button/index.html.vue"
const data = JSON.parse("{\"path\":\"/components/button/\",\"title\":\"Button 按钮\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Button 属性\",\"slug\":\"button-属性\",\"link\":\"#button-属性\",\"children\":[]},{\"level\":2,\"title\":\"Button 插槽\",\"slug\":\"button-插槽\",\"link\":\"#button-插槽\",\"children\":[]},{\"level\":2,\"title\":\"Button 方法\",\"slug\":\"button-方法-1\",\"link\":\"#button-方法-1\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"components/button/index.md\"}")
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
