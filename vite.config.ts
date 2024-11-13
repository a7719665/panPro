import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from "unplugin-auto-import/vite";
import path from "path";

export default defineConfig(async () => {
  const UnoCss = await import('unocss/vite').then(i => i.default)

  return {
    plugins: [
      uni(),
      // 配置 UnoCSS
      UnoCss(),
      AutoImport({
        imports: ["vue", "uni-app"], // 自动导入 Vue 和 UniApp 的 API
        dts: "src/types/auto-imports.d.ts", // 自动生成类型声明文件
        eslintrc: {
          enabled: true, // 生成 ESLint 配置文件
          filepath: './.eslintrc-auto-import.json', // ESLint 配置文件路径
        },
      })
    ],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },
    server: {
      proxy: {
        '/agent': {
          // target: 'https://my201hongy.zvrxw.com', // 目标服务器
          target: 'https://my201hongy.zvrxw.com', // 目标服务器
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/agent/, '') // 可选：重写路径
        }
      }
    }
  }
})
