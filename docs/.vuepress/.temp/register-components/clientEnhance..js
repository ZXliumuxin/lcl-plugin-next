
        import { defineAsyncComponent } from "vue";
        export default {
            enhance({ app }) {
                app.component("button-base", defineAsyncComponent(() => import("E:/shangchuan/test-button/docs/examples/button/base.vue")));
app.component("button-disabled", defineAsyncComponent(() => import("E:/shangchuan/test-button/docs/examples/button/disabled.vue")));
app.component("button-size", defineAsyncComponent(() => import("E:/shangchuan/test-button/docs/examples/button/size.vue")));
app.component("demo", defineAsyncComponent(() => import("E:/shangchuan/test-button/node_modules/@ddongui/vuepress-plugin-demo-block/dist/public/Demo.vue")))
            }
        }
        