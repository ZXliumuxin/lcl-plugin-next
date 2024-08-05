export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/shangchuan/test-button/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"安装"} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"E:/shangchuan/test-button/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"组件列表概述"} }],
  ["/components/button/", { loader: () => import(/* webpackChunkName: "components_button_index.html" */"E:/shangchuan/test-button/docs/.vuepress/.temp/pages/components/button/index.html.js"), meta: {"title":"Button 按钮"} }],
  ["/components/guide/", { loader: () => import(/* webpackChunkName: "components_guide_index.html" */"E:/shangchuan/test-button/docs/.vuepress/.temp/pages/components/guide/index.html.js"), meta: {"title":"lcl-plugin-next"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/shangchuan/test-button/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
