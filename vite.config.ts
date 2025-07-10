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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}); 