import React, { useState, useCallback, useRef } from 'react';
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
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastRequestRef = useRef<string>('');

  const executeSearch = async (companyName: string) => {
    setLoading(true);
    try {
      console.log('Sending request to:', `/start_task/?company_name=${encodeURIComponent(companyName)}`);
      // start_task 接口有独立的代理配置，不走 /api 前缀
      const response = await apiClient.get(`/start_task/?company_name=${encodeURIComponent(companyName)}`, {
        baseURL: '' // 覆盖默认的 baseURL
      });
      
      console.log('Success response:', response.data);
      message.success('任务已开始执行');
      onStartTask(response.data.batch_no);
      lastRequestRef.current = companyName; // 记录最后一次成功请求的企业名称
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

  const handleSearch = useCallback(() => {
    const trimmedValue = inputValue.trim();
    
    if (!trimmedValue) {
      message.warning('请输入企业名称或统一社会信用代码');
      return;
    }

    // 如果正在处理请求，提示用户等待
    if (loading) {
      message.info('正在处理中，请稍等...');
      return;
    }

    // 如果与上次请求的企业相同，询问用户是否确认重新提交
    if (lastRequestRef.current === trimmedValue) {
      message.warning('该企业的尽调建议已经在处理中或已完成，请避免重复提交');
      return;
    }

    // 清除之前的防抖计时器
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // 设置新的防抖计时器（500ms 防抖）
    debounceTimerRef.current = setTimeout(() => {
      executeSearch(trimmedValue);
    }, 500);

    // 给用户反馈，表明系统正在处理
    message.info('正在启动任务，请稍等...');
  }, [inputValue, loading]);

  // 组件卸载时清除计时器
  React.useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

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