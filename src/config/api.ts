import axios from 'axios';
import { message } from 'antd';

export const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || '/api';

export const API_ENDPOINTS = {
  auth: {
    token: '/auth/token',
  },
  admin: {
    apiKeys: '/admin/api-keys',
    apiKeyLogs: '/admin/api-keys/logs',
  },
  task: {
    list: '/tasks',
    status: (batchNo: string) => `/task/${batchNo}/status`,
    questions: (batchNo: string) => `/task/${batchNo}/questions`,
    summary: (batchNo: string) => `/task/${batchNo}/summary`,
  },
  dueDiligence: {
    generateQuestions: (batchNo: string) => `/generate_questions/${batchNo}`,
    getQuestions: (batchNo: string) => `/get_generate_questions/${batchNo}`,
  },
};

// 创建 axios 实例
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 打印请求日志
    console.log('🚀 API请求:', {
      method: config.method?.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
      fullURL: `${config.baseURL}${config.url}`,
      headers: config.headers,
      data: config.data
    });
    
    // 从 sessionStorage 获取 API Key
    const apiKey = sessionStorage.getItem('api_key');
    if (apiKey) {
      // 确保 headers 对象存在
      config.headers = config.headers || {};
      // 添加 API Key 到请求头
      config.headers['X-API-Key'] = apiKey;
    }
    return config;
  },
  (error) => {
    console.error('❌ API请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    // 打印响应日志
    console.log('✅ API响应:', {
      status: response.status,
      url: response.config.url,
      data: response.data
    });
    return response;
  },
  (error) => {
    // 打印错误日志
    console.error('❌ API响应错误:', {
      status: error.response?.status,
      url: error.config?.url,
      message: error.message,
      response: error.response?.data
    });
    
    if (error.response) {
      switch (error.response.status) {
        case 401:
          message.error('API Key 无效或已过期');
          sessionStorage.removeItem('api_key');
          window.location.href = '/auth';
          break;
        case 403:
          message.error('权限不足');
          break;
        case 500:
          message.error('服务器内部错误');
          break;
        default:
          message.error(error.response.data?.message || '请求失败');
      }
    } else {
      message.error('网络错误，请检查网络连接');
    }
    return Promise.reject(error);
  }
);

export default apiClient; 