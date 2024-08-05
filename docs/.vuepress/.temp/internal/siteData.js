export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"./public/images/hero.png\"}]],\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\",\"title\":\"lcl-plugin-next\",\"description\":\"lcl-plugin-next 的文档\"},\"/en/\":{\"selectLanguageName\":\"English\",\"title\":\"lcl-plugin-next\",\"description\":\"lcl-plugin-next 的文档\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
