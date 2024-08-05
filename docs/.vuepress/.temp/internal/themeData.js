export const themeData = JSON.parse("{\"logo\":\"images/hero.png\",\"locales\":{\"/\":{\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"navbar\":[{\"text\":\"主页\",\"link\":\"/\"},{\"text\":\"组件\",\"link\":\"/components/\"},{\"text\":\"gitee\",\"link\":\"https://code.iglooblog.top/c/1.html\"}],\"sidebar\":{\"/components\":[{\"text\":\"通用组件\",\"collapsible\":false,\"children\":[{\"text\":\"Button 按钮\",\"link\":\"/components/button/\"},{\"text\":\"guide 测试\",\"link\":\"/components/guide/\"}]}]},\"notFound\":[\"没找到\",\"网页走丢了\"],\"backToHome\":\"返回首页\"},\"/en/\":{\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Language\",\"navbar\":[{\"text\":\"主页En\",\"link\":\"/\"},{\"text\":\"组件\",\"link\":\"/components/\"},{\"text\":\"gitee\",\"link\":\"https://code.iglooblog.top/c/1.html\"}],\"sidebar\":{\"/components\":[{\"text\":\"目录En\",\"collapsible\":true,\"children\":[{\"text\":\"button\",\"link\":\"/button/\"},{\"text\":\"guide\",\"link\":\"/guide/\"}]}]},\"notFound\":[\"没找到en\",\"网页走丢了en\"],\"backToHome\":\"返回首页en\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
