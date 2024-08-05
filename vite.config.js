import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const pathSrc = path.resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // 配置插件
  resolve: { // 解析配置
    alias: {
      "/@": pathSrc
    }
  },
  root: "./",
  build: { // 构建配置
    emptyOutDir: true, // 清空输出目录
    lib: { // 库构建选项
      formats: ['es', 'umd'], // 输出格式
      entry: path.resolve(__dirname, "package/index.js"), // 库入口文件
      name: `lclPluginNext`, // 库名称
      fileName: `lcl-plugin-next` // 输出文件名
    },
    rollupOptions: { // Rollup 选项
      external: ['vue'], // 外部化依赖
      output: {
        name: `lclPluginNext`, // UMD 构建中的全局变量名
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
});
