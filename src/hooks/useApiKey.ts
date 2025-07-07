import { useState, useEffect, useCallback } from 'react';
import { message } from 'antd';
// import { ApiKey, ApiResponse } from '@/types/api';
import apiClient from '@/config/api';
import { API_ENDPOINTS } from '@/config/api';

const AUTH_TOKEN_STORAGE_KEY = 'auth_token';

export const useApiKey = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedToken = sessionStorage.getItem(AUTH_TOKEN_STORAGE_KEY);
    if (storedToken) {
      setAuthToken(storedToken);
    }
  }, []);

  const setTokenAndStore = useCallback((token: string) => {
    setAuthToken(token);
    sessionStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
    // 验证成功后立即跳转到 dashboard
    window.location.href = '/dashboard';
  }, []);

  const removeApiKey = useCallback(() => {
    setApiKey(null);
    setAuthToken(null);
    sessionStorage.removeItem(AUTH_TOKEN_STORAGE_KEY);
  }, []);

  const validateApiKey = useCallback(async (key: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const response = await apiClient.post(API_ENDPOINTS.auth.token, null, {
        headers: {
          'X-API-Key': key,
        },
      });

      if (response.data && response.data.token) {
        // 保存API Key用于显示，保存token用于后续请求
        setApiKey(key);
        setTokenAndStore(response.data.token);
        message.success('登录成功');
        return true;
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      message.error(error instanceof Error ? error.message : '登录失败');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [setTokenAndStore]);

  return {
    apiKey,
    authToken,
    isLoading,
    validateApiKey,
    removeApiKey,
  };
}; 