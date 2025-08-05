import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// 从环境变量读取后端地址，默认为 localhost:8080
const API_HOST = process.env.VITE_API_HOST || 'localhost';
const API_PORT = process.env.VITE_API_PORT || '8080';
const API_PROTOCOL = process.env.VITE_API_PROTOCOL || 'http';
const API_TARGET = `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0', // 允许外部访问
    proxy: {
      '/api': {
        target: API_TARGET,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
      '/start_task': {
        target: API_TARGET,
        changeOrigin: true,
        secure: false,
      },
      '^/api/generate_questions/.*': {
        target: API_TARGET,
        changeOrigin: true,
        secure: false,
      },
      '^/api/get_generate_questions/.*': {
        target: API_TARGET,
        changeOrigin: true,
        secure: false,
      }
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 将 React 相关库分离到单独的 chunk
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // 将 Ant Design 核心库分离
          'antd-core': ['antd'],
          // 将 Ant Design 图标和图表分离
          'antd-extra': ['@ant-design/icons', '@ant-design/charts'],
          // 将图表相关库分离
          'chart-vendor': ['@antv/g2plot', '@antv/data-set', 'framer-motion'],
          // 将工具库分离
          'utils-vendor': ['axios', 'date-fns', '@tanstack/react-query'],
          // 将 markdown 相关库分离
          'markdown-vendor': ['react-markdown', 'remark-gfm'],
          // 将样式相关库分离
          'style-vendor': ['styled-components']
        },
      },
    },
    chunkSizeWarningLimit: 1000, // 将警告阈值提高到 1000KB
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}); 