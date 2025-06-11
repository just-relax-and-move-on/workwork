import React, { useState } from 'react';
import { Card, Spin, Alert, Typography, Space, Tag, Button } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { useTaskPolling } from '@/hooks/useTaskPolling';
import SubTaskCard from '@/components/SubTaskCard';
import TaskSummary from '@/components/TaskSummary';
import TaskInput from '@/components/TaskInput';

const { Title, Text } = Typography;

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatusTag = styled(Tag)<{ status: string }>`
  font-size: 14px;
  padding: 4px 8px;
  border-radius: 4px;
  ${({ status }) => {
    switch (status) {
      case 'pending':
        return 'background-color: #f5f5f5; color: #666;';
      case 'running':
        return 'background-color: #e6f7ff; color: #1890ff;';
      case 'completed':
        return 'background-color: #f6ffed; color: #52c41a;';
      case 'failed':
        return 'background-color: #fff2f0; color: #ff4d4f;';
      default:
        return '';
    }
  }}
`;

const TaskMonitor: React.FC = () => {
  const [batchNo, setBatchNo] = useState<string | null>(null);
  const { mainTask, subTasks, summary, isLoading, error } = useTaskPolling(batchNo || '');

  const handleStartTask = (newBatchNo: string) => {
    setBatchNo(newBatchNo);
  };

  return (
    <Container>
      <TaskInput onStartTask={handleStartTask} />
      
      {batchNo && (
        <Card>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            {isLoading && (
              <div style={{ textAlign: 'center', padding: '20px' }}>
                <Spin size="large" />
              </div>
            )}

            {error && (
              <Alert
                message="加载失败"
                description={error.message}
                type="error"
                action={
                  <Button size="small" type="primary" onClick={() => window.location.reload()}>
                    重试
                  </Button>
                }
              />
            )}

            {mainTask && (
              <>
                <div>
                  <Title level={4}>{mainTask.title}</Title>
                  <Space>
                    <Text>批次号：{mainTask.batch_no}</Text>
                    <StatusTag status={mainTask.status}>
                      {mainTask.status === 'running' && <Spin size="small" style={{ marginRight: 8 }} />}
                      {mainTask.status}
                    </StatusTag>
                    <Text>创建时间：{format(new Date(mainTask.created_at), 'yyyy-MM-dd HH:mm:ss', { locale: zhCN })}</Text>
                  </Space>
                </div>

                <div>
                  <Title level={5}>子任务列表</Title>
                  <AnimatePresence>
                    {subTasks?.map((task) => (
                      <SubTaskCard key={task.id} task={task} />
                    ))}
                  </AnimatePresence>
                </div>

                {mainTask.status === 'completed' && summary && (
                  <div>
                    <Title level={5}>汇总结果</Title>
                    <TaskSummary summary={summary} />
                  </div>
                )}

                {mainTask.status === 'failed' && (
                  <Alert
                    message="任务执行失败"
                    description="请检查任务配置或联系管理员"
                    type="error"
                    showIcon
                  />
                )}
              </>
            )}
          </Space>
        </Card>
      )}
    </Container>
  );
};

export default TaskMonitor; 