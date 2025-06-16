import { useState, useEffect, useCallback } from 'react';
import { message } from 'antd';
import { ApiKey, ApiResponse } from '@/types/api';
import apiClient from '@/config/api';

const API_KEY_STORAGE_KEY = 'api_key';

export const useApiKey = () => {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedApiKey = sessionStorage.getItem(API_KEY_STORAGE_KEY);
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const setApiKeyAndStore = useCallback((key: string) => {
    setApiKey(key);
    sessionStorage.setItem(API_KEY_STORAGE_KEY, key);
    // 验证成功后立即跳转到 dashboard
    window.location.href = '/dashboard';
  }, []);

  const removeApiKey = useCallback(() => {
    setApiKey(null);
    sessionStorage.removeItem(API_KEY_STORAGE_KEY);
  }, []);

  const validateApiKey = useCallback(async (key: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      const response = await apiClient.post('/api/auth/token', null, {
        headers: {
          'X-API-Key': key,
        },
      });

      if (response.data && response.data.token) {
        setApiKeyAndStore(key);
        message.success('API Key 验证成功');
        return true;
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      message.error(error instanceof Error ? error.message : 'API Key 验证失败');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [setApiKeyAndStore]);

  return {
    apiKey,
    isLoading,
    validateApiKey,
    removeApiKey,
  };
}; 