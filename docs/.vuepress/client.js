import "lcl-plugin-next/css"
import lclPluginNext from "lcl-plugin-next"
import { defineClientConfig } from "vuepress/client"

export default defineClientConfig({
    enhance({ app }) {
        lclPluginNext(app)
    }
})