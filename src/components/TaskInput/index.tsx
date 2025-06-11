import React, { useState } from 'react';
import { Input, Button, Card, Space, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';

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
      const response = await fetch(`/start_task/?company_name=${encodeURIComponent(inputValue)}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
        }
      });
      
      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('Error response:', errorData);
        throw new Error(errorData?.detail || '启动任务失败');
      }
      
      const data = await response.json();
      console.log('Success response:', data);
      message.success('任务已开始执行');
      onStartTask(data.batch_no);
    } catch (error) {
      console.error('Task start error:', error);
      if (error instanceof TypeError) {
        console.error('Network error details:', error.message);
      }
      message.error(error instanceof Error ? error.message : '启动任务失败，请重试');
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