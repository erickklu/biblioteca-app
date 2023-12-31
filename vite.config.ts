import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
   
    globals: true,
    environment: 'jsdom'
  },
  server: {
    proxy: {
      '/api': {
      target: 'http://192.168.250.50:8069',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
    }
    
  }
  
})
