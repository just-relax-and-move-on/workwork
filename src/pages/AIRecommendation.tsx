import React, { useState } from 'react';
import { Card, List, Tag, Button, Input, Space, Typography } from 'antd';
import { SendOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Text } = Typography;

interface Recommendation {
  id: string;
  caseId: string;
  problem: string;
  aiAnalysis: string;
  suggestion: string;
  feedback: 'positive' | 'negative' | null;
}

const AIRecommendation: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    {
      id: '1',
      caseId: 'CASE001',
      problem: '客户电话无法接通',
      aiAnalysis: '根据历史数据分析，此类问题通常与客户联系方式变更或信号问题有关。建议检查客户提供的其他联系方式，并尝试在不同时段联系。',
      suggestion: '1. 尝试使用备用联系方式\n2. 在上午9-11点或下午2-4点时段联系\n3. 发送短信提醒客户保持电话畅通',
      feedback: null,
    },
    {
      id: '2',
      caseId: 'CASE002',
      problem: '企业地址信息不准确',
      aiAnalysis: '地址信息不准确通常与工商信息更新不及时或客户提供信息有误有关。建议核实最新工商信息，并与客户确认实际经营地址。',
      suggestion: '1. 查询最新工商信息\n2. 要求客户提供实际经营地址证明\n3. 安排实地考察确认',
      feedback: null,
    },
  ]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    // 模拟 AI 分析
    const newRecommendation: Recommendation = {
      id: Date.now().toString(),
      caseId: `CASE${Math.floor(Math.random() * 1000)}`,
      problem: inputValue,
      aiAnalysis: 'AI 正在分析问题...',
      suggestion: '正在生成建议...',
      feedback: null,
    };

    setRecommendations([newRecommendation, ...recommendations]);
    setInputValue('');

    // 模拟 AI 响应延迟
    setTimeout(() => {
      setRecommendations(prev => prev.map(item => 
        item.id === newRecommendation.id
          ? {
              ...item,
              aiAnalysis: '根据历史数据分析，这是一个常见问题。建议从多个角度进行排查和解决。',
              suggestion: '1. 详细记录问题情况\n2. 制定解决方案\n3. 跟踪解决效果',
            }
          : item
      ));
    }, 2000);
  };

  const handleFeedback = (id: string, type: 'positive' | 'negative') => {
    setRecommendations(prev =>
      prev.map(item =>
        item.id === id ? { ...item, feedback: type } : item
      )
    );
  };

  return (
    <div>
      <Card title="AI 智能建议" style={{ marginBottom: '16px' }}>
        <Space.Compact style={{ width: '100%' }}>
          <TextArea
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="请输入您遇到的问题，AI 将为您提供分析和建议"
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            style={{ height: 'auto' }}
          >
            发送
          </Button>
        </Space.Compact>
      </Card>

      <List
        itemLayout="vertical"
        dataSource={recommendations}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <Button
                type="text"
                icon={<LikeOutlined />}
                onClick={() => handleFeedback(item.id, 'positive')}
                style={{ color: item.feedback === 'positive' ? '#52c41a' : undefined }}
              >
                有帮助
              </Button>,
              <Button
                type="text"
                icon={<DislikeOutlined />}
                onClick={() => handleFeedback(item.id, 'negative')}
                style={{ color: item.feedback === 'negative' ? '#ff4d4f' : undefined }}
              >
                没帮助
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={
                <Space>
                  <Tag color="blue">{item.caseId}</Tag>
                  <Text strong>{item.problem}</Text>
                </Space>
              }
            />
            <Card size="small" title="AI 分析" style={{ marginBottom: '8px' }}>
              <Text>{item.aiAnalysis}</Text>
            </Card>
            <Card size="small" title="建议方案">
              <Text>{item.suggestion}</Text>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default AIRecommendation; 