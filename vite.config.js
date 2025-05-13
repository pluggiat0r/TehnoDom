import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import ghPages from 'vite-plugin-gh-pages'

// Укажите имя вашего репозитория GitHub
const repoName = 'TehnoDom' // Замените на ваше имя репозитория
const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProduction ? /${repoName}/ : '/',
  plugins: [
    vue(),
    ghPages({
      branch: 'gh-pages',
      repo: 'https://github.com/pluggiat0r/TehnoDom.git', // Замените на ваш URL
      dir: 'dist',
      dotfiles: true,
      silent: false // Показывать логи деплоя
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    assetsInlineLimit: 4096,
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: isProduction ? false : true,
    minify: isProduction ? 'terser' : false,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})