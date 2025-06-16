import React, { useState } from 'react';
import { Card, Input, Button, Typography, Space } from 'antd';
import { useApiKey } from '@/hooks/useApiKey';

const { Title, Text } = Typography;

const ApiKeyAuth: React.FC = () => {
  const [apiKeyInput, setApiKeyInput] = useState('');
  const { validateApiKey, isLoading } = useApiKey();

  const handleSubmit = async () => {
    if (!apiKeyInput.trim()) {
      return;
    }

    await validateApiKey(apiKeyInput);
  };

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      background: '#f0f2f5'
    }}>
      <Card style={{ width: 400, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <Title level={2}>API Key 认证</Title>
            <Text type="secondary">请输入您的 API Key 以继续访问系统</Text>
          </div>
          
          <Input.Password
            placeholder="请输入 API Key"
            value={apiKeyInput}
            onChange={(e) => setApiKeyInput(e.target.value)}
            onPressEnter={handleSubmit}
          />
          
          <Button 
            type="primary" 
            block 
            onClick={handleSubmit}
            loading={isLoading}
          >
            验证
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default ApiKeyAuth; 