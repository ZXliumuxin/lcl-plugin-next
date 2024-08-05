export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/shangchuan/text-button-github/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"安装"} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"E:/shangchuan/text-button-github/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"组件列表概述"} }],
  ["/components/button/", { loader: () => import(/* webpackChunkName: "components_button_index.html" */"E:/shangchuan/text-button-github/docs/.vuepress/.temp/pages/components/button/index.html.js"), meta: {"title":"Button 按钮"} }],
  ["/components/guide/", { loader: () => import(/* webpackChunkName: "components_guide_index.html" */"E:/shangchuan/text-button-github/docs/.vuepress/.temp/pages/components/guide/index.html.js"), meta: {"title":"lcl-plugin-next"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/shangchuan/text-button-github/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
