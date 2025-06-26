import React, { useEffect, useState } from 'react';
import { Card, Spin, Alert, Typography, Space, Tag, Button } from 'antd';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { useParams, useNavigate } from 'react-router-dom';
import { useTaskPolling } from '@/hooks/useTaskPolling';
import SubTaskCard from '@/components/SubTaskCard';
import TaskSummary from '@/components/TaskSummary';
import { ArrowLeftOutlined, BulbOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderCard = styled(Card)`
  margin-bottom: 24px;
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

// 调试信息样式组件 - 暂时注释掉
// const DebugInfo = styled.div`
//   margin: 16px 0;
//   padding: 16px;
//   background-color: #f5f5f5;
//   border-radius: 4px;
//   font-family: monospace;
//   white-space: pre-wrap;
// `;

const SubTasksHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  padding: 8px 0;
  
  &:hover {
    color: #1890ff;
  }
`;

const BatchQuery: React.FC = () => {
  const { batchNo } = useParams<{ batchNo: string }>();
  const navigate = useNavigate();
  const { mainTask, subTasks, summary, isLoading, error } = useTaskPolling(batchNo || '');
  const [subTasksExpanded, setSubTasksExpanded] = useState(false);

  // 调试日志
  useEffect(() => {
    if (mainTask || subTasks || summary) {
      console.log('Data received:', {
        mainTask,
        subTasks,
        summary
      });
    }
  }, [mainTask, subTasks, summary]);

  return (
    <Container>
      <HeaderCard>
        <Space direction="horizontal" size="middle">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/task-list')}
          >
            返回列表
          </Button>
          <Text strong>批次号：{batchNo}</Text>
        </Space>
      </HeaderCard>
      
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
                  <StatusTag status={mainTask.status}>
                    {mainTask.status === 'running' && <Spin size="small" style={{ marginRight: 8 }} />}
                    {mainTask.status}
                  </StatusTag>
                  <Text>创建时间：{format(new Date(mainTask.created_at), 'yyyy-MM-dd HH:mm:ss', { locale: zhCN })}</Text>
                </Space>
              </div>

              {/* 调试信息显示 - 暂时注释掉
              {process.env.NODE_ENV === 'development' && (
                <DebugInfo>
                  <div>Debug Info:</div>
                  <div>Main Task: {JSON.stringify(mainTask, null, 2)}</div>
                  <div>Sub Tasks: {JSON.stringify(subTasks, null, 2)}</div>
                  <div>Summary: {JSON.stringify(summary, null, 2)}</div>
                </DebugInfo>
              )}
              */}

              {Array.isArray(subTasks) && subTasks.length > 0 ? (
                <div>
                  <SubTasksHeaderWrapper onClick={() => setSubTasksExpanded(!subTasksExpanded)}>
                    <Title level={5} style={{ margin: 0 }}>
                      子任务列表 ({subTasks.length})
                    </Title>
                    <Button
                      type="text"
                      icon={subTasksExpanded ? <UpOutlined /> : <DownOutlined />}
                      size="small"
                    />
                  </SubTasksHeaderWrapper>
                  
                  {subTasksExpanded && (
                    <AnimatePresence>
                      {subTasks.map((task) => (
                        <SubTaskCard key={task.id} task={task} />
                      ))}
                    </AnimatePresence>
                  )}
                </div>
              ) : (
                <Alert
                  message="暂无子任务数据"
                  type="info"
                  showIcon
                />
              )}

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
      
      {/* 尽调建议按钮 - 放在页面最底部 */}
      {batchNo && (
        <Card style={{ marginTop: '24px', textAlign: 'center' }}>
          <Button
            type="primary"
            size="large"
            icon={<BulbOutlined />}
            onClick={() => navigate(`/due-diligence/${batchNo}`)}
            style={{ minWidth: '160px' }}
          >
            尽调建议
          </Button>
        </Card>
      )}
    </Container>
  );
};

export default BatchQuery; 