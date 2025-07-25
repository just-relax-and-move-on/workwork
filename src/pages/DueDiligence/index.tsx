import React, { useEffect } from 'react';
import { Card, Spin, Alert, Typography, Space, Button, Progress, List, Tag, Empty } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined, BulbOutlined, ReloadOutlined } from '@ant-design/icons';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient, { API_ENDPOINTS } from '@/config/api';
import type { DueDiligenceResponse, DueDiligenceQuestion } from '@/types/api';

const { Title, Text, Paragraph } = Typography;

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderCard = styled(Card)`
  margin-bottom: 24px;
`;

const QuestionCard = styled(Card)`
  margin-bottom: 16px;
  border-left: 4px solid #1890ff;
`;

const StatusProgress = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const DueDiligence: React.FC = () => {
  const { batchNo } = useParams<{ batchNo: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();


  // 获取现有问题
  const { data: questionsData, isLoading: isLoadingQuestions, error: questionsError, refetch } = useQuery<DueDiligenceResponse>({
    queryKey: ['dueDiligenceQuestions', batchNo],
    queryFn: async () => {
      if (!batchNo) throw new Error('批次号不能为空');
      
      try {
        // get_generate_questions 接口现在走 /api 前缀
        const response = await apiClient.get(API_ENDPOINTS.dueDiligence.getQuestions(batchNo));
        
        // 如果后端返回空对象 {} 或没有status字段，说明没有数据，显示生成按钮
        if (!response.data || !response.data.status) {
          return {
            status: 'not_found',
            questions: null
          };
        }
        
        return response.data;
      } catch (error) {
        // 如果是404错误，返回not_found状态
        if ((error as any).response?.status === 404) {
          return {
            status: 'not_found',
            questions: null
          };
        }
        throw error;
      }
    },
    refetchInterval: (query) => {
      const data = query.state.data;
      // 只有在created或running时才轮询
      // not_found状态不轮询，避免死循环
      if (data?.status === 'created' || data?.status === 'running') {
        return 5000;
      }
      return false;
    },
    enabled: !!batchNo,
  });

  // 生成问题
  const generateQuestionsMutation = useMutation({
    mutationFn: async () => {
      if (!batchNo) throw new Error('批次号不能为空');
      
      // generate_questions 接口现在走 /api 前缀
      const response = await apiClient.get(API_ENDPOINTS.dueDiligence.generateQuestions(batchNo));
      
      return response.data;
    },
    onSuccess: () => {
      // 等待5秒后再开始查询，给后端时间写入数据
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ['dueDiligenceQuestions', batchNo] });
      }, 5000);
    },
  });

  // 监听状态变化
  useEffect(() => {
    // 状态变化时的处理逻辑
    if (questionsData?.status === 'created' || questionsData?.status === 'running') {
      console.log('Task is running');
    } else {
      console.log('Task is not running');
    }
  }, [questionsData?.status]);

  const handleGenerateQuestions = () => {
    generateQuestionsMutation.mutate();
  };

  const renderQuestionsList = (questions: DueDiligenceQuestion[]) => (
    <List
      dataSource={questions}
      renderItem={(question, index) => (
        <motion.div
          key={question.seq}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <QuestionCard size="small">
            <Space direction="vertical" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text strong>问题 {question.seq + 1}</Text>
                <Tag color="blue">{question.topic}</Tag>
              </div>
              
              <Paragraph style={{ margin: 0, fontSize: '16px' }}>
                {question.question}
              </Paragraph>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <Text type="secondary">询问对象：</Text>
                  <Text>{question.person}</Text>
                </div>
                <div>
                  <Text type="secondary">核实动作：</Text>
                  <Text>{question.action}</Text>
                </div>
              </div>
              
              {/* 风险标签 */}
              {question.risk_tag && question.risk_tag.length > 0 && (
                <div>
                  <Text type="secondary" style={{ marginRight: 8 }}>风险标签：</Text>
                  <Space size={4} wrap>
                    {question.risk_tag.map((tag, tagIndex) => (
                      <Tag key={tagIndex} color="red">
                        {tag}
                      </Tag>
                    ))}
                  </Space>
                </div>
              )}
              {/* 新增：有效内容/无内容标签 */}
            </Space>
          </QuestionCard>
        </motion.div>
      )}
    />
  );

  const renderContent = () => {
    if (isLoadingQuestions) {
      return (
        <StatusProgress>
          <Spin size="large" />
          <div style={{ marginTop: 16 }}>
            <Text>正在获取问题数据...</Text>
          </div>
        </StatusProgress>
      );
    }

    if (questionsError) {
      return (
        <Alert
          message="获取问题失败"
          description={questionsError.message}
          type="error"
          action={
            <Button size="small" type="primary" onClick={() => refetch()}>
              重试
            </Button>
          }
        />
      );
    }



    // 只有在真正没有数据且没有进行中的任务时，才显示生成按钮
    if (!questionsData || questionsData.status === 'not_found') {
      return (
        <Card>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="暂无尽调问题"
          >
            <Button
              type="primary"
              size="large"
              icon={<BulbOutlined />}
              onClick={handleGenerateQuestions}
              loading={generateQuestionsMutation.isPending}
            >
              生成建议
            </Button>
          </Empty>
        </Card>
      );
    }

    // 显示生成进度
    if (questionsData.status === 'running') {
      return (
        <Card>
          <StatusProgress>
            <Spin size="large" />
            <div style={{ marginTop: 16 }}>
              <Title level={4}>正在生成尽调问题...</Title>
              <Progress percent={undefined} status="active" />
              <Text type="secondary">任务执行中，系统正在自动生成问题，请耐心等待</Text>
            </div>
          </StatusProgress>
        </Card>
      );
    }

    // 处理其他中间状态(created等)
    if (questionsData.status === 'created') {
      return (
        <Card>
          <StatusProgress>
            <Spin size="large" />
            <div style={{ marginTop: 16 }}>
              <Title level={4}>任务已创建...</Title>
              <Progress percent={undefined} status="active" />
              <Text type="secondary">任务已触发，等待系统准备数据后开始生成</Text>
            </div>
          </StatusProgress>
        </Card>
      );
    }

    // 显示生成的问题
    if (questionsData.status === 'completed' && questionsData.questions) {
      return (
        <Card>
          <div style={{ marginBottom: 24, textAlign: 'center' }}>
            <Title level={4}>尽调建议问题清单</Title>
            <Text type="secondary">共 {questionsData.questions.length} 个问题</Text>
            <div style={{ marginTop: 16 }}>
              <Button
                icon={<ReloadOutlined />}
                onClick={handleGenerateQuestions}
                loading={generateQuestionsMutation.isPending}
              >
                重新生成
              </Button>
            </div>
          </div>
          {renderQuestionsList(questionsData.questions)}
        </Card>
      );
    }

    // 生成失败
    if (questionsData.status === 'failed') {
      return (
        <Alert
          message="问题生成失败"
          description="请重试或联系管理员"
          type="error"
          action={
            <Button type="primary" onClick={handleGenerateQuestions}>
              重新生成
            </Button>
          }
        />
      );
    }

    return null;
  };

  return (
    <Container>
      <HeaderCard>
        <Space direction="horizontal" size="middle">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate(`/batch-query/${batchNo}`)}
          >
            返回详情
          </Button>
          <Text strong>尽调建议 - 批次号：{batchNo}</Text>
        </Space>
      </HeaderCard>
      
      {renderContent()}
    </Container>
  );
};

export default DueDiligence; 