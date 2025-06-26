import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Progress, Timeline, Table, Tag, Button, Space, Tooltip, Typography } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, ExportOutlined, MailOutlined } from '@ant-design/icons';
import { Pie } from '@ant-design/charts';
import { useParams, useNavigate } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;

// 类型定义
interface BusinessInfo {
  businessId: string;
  customerName: string;
  accountType: string;
  channel: string;
  branch: string;
  processingTime: string;
  efficiencyScore: number;
}

interface TimeEfficiency {
  stage: string;
  duration: string;
  status: 'success' | 'error';
  delay?: string;
}

interface ComplexityFactor {
  factor: string;
  value: number;
  status: 'success' | 'error';
  description: string;
}

interface RiskControl {
  dimension: string;
  checked: boolean;
  highlighted: boolean;
  details?: string;
}

// 示例数据
const businessInfo: BusinessInfo = {
  businessId: '20250605-001',
  customerName: '上海某科技有限公司',
  accountType: '基本户',
  channel: '手机银行',
  branch: '南京分行鼓楼支行',
  processingTime: '54小时',
  efficiencyScore: 82.4,
};

const timeEfficiencyData: TimeEfficiency[] = [
  { stage: '预约', duration: '2小时', status: 'success' },
  { stage: '初审', duration: '4小时', status: 'success' },
  { stage: '尽调', duration: '14小时', status: 'error', delay: '+10h 超时' },
  { stage: '电核', duration: '8小时', status: 'success' },
  { stage: '面签', duration: '12小时', status: 'success' },
  { stage: '开户', duration: '14小时', status: 'success' },
];

const complexityFactors: ComplexityFactor[] = [
  { factor: '账户类型为基本户', value: 0.05, status: 'success', description: '基本户开户流程较复杂' },
  { factor: '外籍董事成员', value: 0.05, status: 'success', description: '需要额外身份验证' },
  { factor: '命中失信名单', value: 0.10, status: 'success', description: '需要额外风险审查' },
  { factor: '资料补传3轮', value: 0.03, status: 'success', description: '资料补充次数较多' },
  { factor: 'AI判定合理慢', value: 0.05, status: 'success', description: '系统判定处理时间合理' },
];

const riskControlData: RiskControl[] = [
  { dimension: '法人身份核查', checked: true, highlighted: false },
  { dimension: '企业工商信息', checked: true, highlighted: false },
  { dimension: '失信名单查询', checked: true, highlighted: true, details: '发现法人失信记录' },
  { dimension: '裁判文书查询', checked: true, highlighted: true, details: '发现相关诉讼记录' },
  { dimension: '法院公告查询', checked: false, highlighted: false },
  { dimension: '风险处置备注', checked: false, highlighted: false },
];

const EfficiencyScore: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [expandedCards, setExpandedCards] = useState<string[]>([]);

  // 这里可以根据 id 从后端获取数据
  useEffect(() => {
    // TODO: 根据 id 获取具体的业务数据
    console.log('Loading data for case:', id);
  }, [id]);

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  // 进度环图配置
  const pieConfig = {
    data: [
      { type: '得分', value: businessInfo.efficiencyScore },
      { type: '未得分', value: 100 - businessInfo.efficiencyScore }
    ],
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.6,
    width: 240,
    height: 240,
    color: ['#1890ff', '#f0f0f0'], // 主色+灰色
    legend: false,
    label: false,
    statistic: {
      title: false,
      content: {
        style: {
          fontSize: 40,
          fontWeight: 'bold',
          lineHeight: 1,
          color: '#1890ff',
        },
        content: `${businessInfo.efficiencyScore}`,
      },
    },
  };

  return (
    <div style={{ padding: '24px' }}>
      <Button 
        type="link" 
        onClick={() => navigate('/')}
        style={{ marginBottom: '16px' }}
      >
        ← 返回列表
      </Button>
      
      {/* 顶部信息区 */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[24, 24]}>
          <Col span={16}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Text type="secondary">业务编号</Text>
                <div>{businessInfo.businessId}</div>
              </Col>
              <Col span={8}>
                <Text type="secondary">客户名称</Text>
                <div>{businessInfo.customerName}</div>
              </Col>
              <Col span={8}>
                <Text type="secondary">账户类型</Text>
                <div>{businessInfo.accountType}</div>
              </Col>
              <Col span={8}>
                <Text type="secondary">预约渠道</Text>
                <div>{businessInfo.channel}</div>
              </Col>
              <Col span={8}>
                <Text type="secondary">开户网点</Text>
                <div>{businessInfo.branch}</div>
              </Col>
              <Col span={8}>
                <Text type="secondary">处理时长</Text>
                <div>{businessInfo.processingTime}</div>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>效率得分</Title>
              <div style={{ width: '240px', height: '240px', margin: '0 auto' }}>
                <Pie {...pieConfig} width={240} height={240} />
              </div>
              <Text strong style={{ fontSize: 20 }}>{businessInfo.efficiencyScore} / 100</Text>
            </div>
          </Col>
        </Row>
      </Card>

      {/* 中部评分分解区 */}
      <Row gutter={[24, 24]}>
        {/* 时间效率得分卡片 */}
        <Col span={24}>
          <Card 
            title="时间效率得分（68 / 70）"
            extra={<Button type="link" onClick={() => toggleCard('time')}>
              {expandedCards.includes('time') ? '收起' : '展开'}
            </Button>}
          >
            <Timeline>
              {timeEfficiencyData.map((item, index) => (
                <Timeline.Item 
                  key={index}
                  color={item.status === 'success' ? 'green' : 'red'}
                >
                  <Space>
                    <Text>{item.stage}</Text>
                    <Text type="secondary">{item.duration}</Text>
                    {item.delay && <Tag color="red">{item.delay}</Tag>}
                  </Space>
                </Timeline.Item>
              ))}
            </Timeline>
          </Card>
        </Col>

        {/* 业务复杂度得分卡片 */}
        <Col span={24}>
          <Card 
            title="业务复杂度系数 C = 1.15"
            extra={<Button type="link" onClick={() => toggleCard('complexity')}>
              {expandedCards.includes('complexity') ? '收起' : '展开'}
            </Button>}
          >
            <Row gutter={[16, 16]}>
              {complexityFactors.map((factor, index) => (
                <Col span={12} key={index}>
                  <Tooltip title={factor.description}>
                    <Card size="small">
                      <Space>
                        {factor.status === 'success' ? 
                          <CheckCircleOutlined style={{ color: 'green' }} /> : 
                          <CloseCircleOutlined style={{ color: 'red' }} />
                        }
                        <Text>{factor.factor}</Text>
                        <Text type="secondary">+{factor.value}</Text>
                      </Space>
                    </Card>
                  </Tooltip>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>

        {/* 风控动作得分卡片 */}
        <Col span={24}>
          <Card 
            title="风控动作得分（10 / 20）"
            extra={<Button type="link" onClick={() => toggleCard('risk')}>
              {expandedCards.includes('risk') ? '收起' : '展开'}
            </Button>}
          >
            <Table
              dataSource={riskControlData}
              columns={[
                {
                  title: '核查维度',
                  dataIndex: 'dimension',
                  key: 'dimension',
                },
                {
                  title: '状态',
                  dataIndex: 'checked',
                  key: 'checked',
                  render: (checked: boolean) => (
                    checked ? 
                      <CheckCircleOutlined style={{ color: 'green' }} /> : 
                      <CloseCircleOutlined style={{ color: 'red' }} />
                  ),
                },
                {
                  title: '详情',
                  dataIndex: 'details',
                  key: 'details',
                  render: (details?: string) => details && <Tag color="red">{details}</Tag>,
                },
              ]}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>

      {/* 底部汇总区 */}
      <Card style={{ marginTop: '24px' }}>
        <Title level={4}>评分计算说明</Title>
        <Paragraph>
          EfficiencyScore = 时间效率得分 × C（复杂度系数） + 风控得分 + 模型合理性解释得分
          <br />
          EfficiencyScore = 68 × 1.15 + 10 + 3 = 82.2
        </Paragraph>
        <Progress 
          percent={82.2} 
          status="active"
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
        />
        <Paragraph style={{ marginTop: '16px' }}>
          客户为基本户 + 外资背景 + 风险命中后已尽调但未闭环，整体流程偏慢但合理。建议提升风控完整性。
        </Paragraph>
        <Space style={{ marginTop: '16px' }}>
          <Button type="primary" icon={<ExportOutlined />}>导出为PDF</Button>
          <Button icon={<MailOutlined />}>发送至邮箱</Button>
        </Space>
      </Card>
    </div>
  );
};

export default EfficiencyScore; 