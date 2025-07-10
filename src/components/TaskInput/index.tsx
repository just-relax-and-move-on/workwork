import React, { useState } from 'react';
import { Input, Button, Card, Space, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import apiClient from '@/config/api';

const StyledCard = styled(Card)`
  margin-bottom: 24px;
`;

interface TaskInputProps {
  onStartTask: (batchNo: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onStartTask }) => {
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!inputValue.trim()) {
      message.warning('请输入企业名称或统一社会信用代码');
      return;
    }

    setLoading(true);
    try {
      console.log('Sending request to:', `/start_task/?company_name=${encodeURIComponent(inputValue)}`);
      // start_task 接口有独立的代理配置，不走 /api 前缀
      const response = await apiClient.get(`/start_task/?company_name=${encodeURIComponent(inputValue)}`, {
        baseURL: '' // 覆盖默认的 baseURL
      });
      
      console.log('Success response:', response.data);
      message.success('任务已开始执行');
      onStartTask(response.data.batch_no);
    } catch (error) {
      console.error('Task start error:', error);
      // apiClient 已经在拦截器中处理了错误消息显示
      // 这里只需要处理特殊情况
      if (error instanceof Error && !error.message.includes('401')) {
        message.error(error.message || '启动任务失败，请重试');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledCard>
      <Space.Compact style={{ width: '100%' }}>
        <Input
          placeholder="请输入企业名称或统一社会信用代码"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onPressEnter={handleSearch}
          style={{ width: 'calc(100% - 120px)' }}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={handleSearch}
          loading={loading}
          style={{ width: '120px' }}
        >
          尽调建议
        </Button>
      </Space.Compact>
    </StyledCard>
  );
};

export default TaskInput; 