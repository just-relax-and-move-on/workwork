import React, { useState } from 'react';
import { Row, Col, Card, Statistic, Table, Tag, Button } from 'antd';
import { Pie, Column } from '@ant-design/charts';
import { useNavigate } from 'react-router-dom';

// 问题类型及数量
const problemTypes = [
  { type: '账户开立阶段-账户唯一性规则限制', value: 20 },
  { type: '材料预审阶段-影像质量问题', value: 15 },
  { type: '行为驱动归因-预约行为中断', value: 10 },
  { type: '账户开立阶段-开户条件不符合监管规定', value: 5 },
  { type: '尽职调查阶段-企业经营真实性存疑', value: 8 },
  { type: '预约资料提交阶段-影像资料提交问题', value: 8 },
  { type: '材料预审阶段-资料缺失或无效', value: 12 },
  { type: '标准电核阶段-电话无法接通', value: 7 },
  { type: '其他必要影像资料未上传，导致开户审核流程无法完成', value: 9 },
  { type: '营业执照及法人证件影像未上传或上传不合规，导致无法完成开户资料审核', value: 11 },
  { type: '法人未在规定时间内完成双录流程，导致开户失败', value: 6 },
  { type: '营业执照及法人证件影像资料未上传或上传错误，导致开户流程无法完成', value: 13 },
  { type: '客户预约的账户类型与实际开立需求不符（如核准类账户误预约、应为变更而非开户），导致开户申请被退回', value: 4 },
  { type: '客户重复提交预约信息导致系统中存在多条重复预约记录，影响开户流程', value: 3 },
  { type: '企业未满足银行账户设立的资质要求，导致开户申请被退回', value: 2 },
  { type: '客户在预约开户时选择的账户类型与实际需求不符，导致开户流程终止', value: 1 },
  { type: '客户错误选择账户类型，导致开户流程无法继续', value: 0 },
  { type: '提交的开户相关资料不齐全，导致无法完成开户流程', value: 14 },
];

// 类型接口
type Branch = '北京分行' | '上海分行' | '广州分行' | '深圳分行';
interface BranchData { branch: Branch; value: number; }
interface BranchDistribution { [key: string]: BranchData[]; }

// 各问题类型在不同网点的分布
const branchDistribution: BranchDistribution = {
  '账户开立阶段-账户唯一性规则限制': [
    { branch: '北京分行', value: 8 },
    { branch: '上海分行', value: 5 },
    { branch: '广州分行', value: 4 },
    { branch: '深圳分行', value: 3 },
  ],
  '材料预审阶段-影像质量问题': [
    { branch: '北京分行', value: 2 },
    { branch: '上海分行', value: 6 },
    { branch: '广州分行', value: 4 },
    { branch: '深圳分行', value: 3 },
  ],
  '行为驱动归因-预约行为中断': [
    { branch: '北京分行', value: 1 },
    { branch: '上海分行', value: 3 },
    { branch: '广州分行', value: 4 },
    { branch: '深圳分行', value: 2 },
  ],
  '账户开立阶段-开户条件不符合监管规定': [
    { branch: '北京分行', value: 1 },
    { branch: '上海分行', value: 2 },
    { branch: '广州分行', value: 1 },
    { branch: '深圳分行', value: 1 },
  ],
  '尽职调查阶段-企业经营真实性存疑': [
    { branch: '北京分行', value: 3 },
    { branch: '上海分行', value: 2 },
    { branch: '广州分行', value: 2 },
    { branch: '深圳分行', value: 1 },
  ],
  '预约资料提交阶段-影像资料提交问题': [
    { branch: '北京分行', value: 3 },
    { branch: '上海分行', value: 2 },
    { branch: '广州分行', value: 2 },
    { branch: '深圳分行', value: 1 },
  ],
  '材料预审阶段-资料缺失或无效': [
    { branch: '北京分行', value: 4 },
    { branch: '上海分行', value: 3 },
    { branch: '广州分行', value: 3 },
    { branch: '深圳分行', value: 2 },
  ],
  '标准电核阶段-电话无法接通': [
    { branch: '北京分行', value: 2 },
    { branch: '上海分行', value: 2 },
    { branch: '广州分行', value: 1 },
    { branch: '深圳分行', value: 2 },
  ],
  '其他必要影像资料未上传，导致开户审核流程无法完成': [
    { branch: '北京分行', value: 3 },
    { branch: '上海分行', value: 2 },
    { branch: '广州分行', value: 2 },
    { branch: '深圳分行', value: 2 },
  ],
  '营业执照及法人证件影像未上传或上传不合规，导致无法完成开户资料审核': [
    { branch: '北京分行', value: 4 },
    { branch: '上海分行', value: 3 },
    { branch: '广州分行', value: 2 },
    { branch: '深圳分行', value: 2 },
  ],
  '法人未在规定时间内完成双录流程，导致开户失败': [
    { branch: '北京分行', value: 2 },
    { branch: '上海分行', value: 1 },
    { branch: '广州分行', value: 2 },
    { branch: '深圳分行', value: 1 },
  ],
  '营业执照及法人证件影像资料未上传或上传错误，导致开户流程无法完成': [
    { branch: '北京分行', value: 5 },
    { branch: '上海分行', value: 3 },
    { branch: '广州分行', value: 3 },
    { branch: '深圳分行', value: 2 },
  ],
  '客户预约的账户类型与实际开立需求不符（如核准类账户误预约、应为变更而非开户），导致开户申请被退回': [
    { branch: '北京分行', value: 1 },
    { branch: '上海分行', value: 1 },
    { branch: '广州分行', value: 1 },
    { branch: '深圳分行', value: 1 },
  ],
  '客户重复提交预约信息导致系统中存在多条重复预约记录，影响开户流程': [
    { branch: '北京分行', value: 1 },
    { branch: '上海分行', value: 1 },
    { branch: '广州分行', value: 0 },
    { branch: '深圳分行', value: 1 },
  ],
  '企业未满足银行账户设立的资质要求，导致开户申请被退回': [
    { branch: '北京分行', value: 0 },
    { branch: '上海分行', value: 1 },
    { branch: '广州分行', value: 0 },
    { branch: '深圳分行', value: 1 },
  ],
  '客户在预约开户时选择的账户类型与实际需求不符，导致开户流程终止': [
    { branch: '北京分行', value: 0 },
    { branch: '上海分行', value: 0 },
    { branch: '广州分行', value: 1 },
    { branch: '深圳分行', value: 0 },
  ],
  '客户错误选择账户类型，导致开户流程无法继续': [
    { branch: '北京分行', value: 0 },
    { branch: '上海分行', value: 0 },
    { branch: '广州分行', value: 0 },
    { branch: '深圳分行', value: 0 },
  ],
  '提交的开户相关资料不齐全，导致无法完成开户流程': [
    { branch: '北京分行', value: 5 },
    { branch: '上海分行', value: 4 },
    { branch: '广州分行', value: 3 },
    { branch: '深圳分行', value: 2 },
  ],
};

// 案例数据（丰富描述，含分行字段）
const tableData = [
  {
    id: 'CASE001',
    type: '账户开立阶段-账户唯一性规则限制',
    branch: '北京分行',
    description: '客户已在其他银行开立基本户，根据监管规定，同一企业只能开立一个基本户，无法在我行继续开立基本户。',
    status: '已解决',
  },
  {
    id: 'CASE002',
    type: '账户开立阶段-账户唯一性规则限制',
    branch: '上海分行',
    description: '系统检测到该企业已在其他银行开立基本户，根据《人民币银行结算账户管理办法》规定，企业只能选择一家银行开立基本户，因此无法受理本次开户申请。',
    status: '处理中',
  },
  {
    id: 'CASE003',
    type: '材料预审阶段-影像质量问题',
    branch: '广州分行',
    description: '客户上传的法人身份证照片存在严重模糊、反光等问题，导致系统无法准确识别身份证号码、姓名等关键信息，且照片边缘存在明显阴影，影响证件真实性判断，已通知客户重新上传清晰的身份证原件照片。',
    status: '处理中',
  },
  {
    id: 'CASE004',
    type: '材料预审阶段-影像质量问题',
    branch: '深圳分行',
    description: '客户上传的营业执照影像不完整，仅包含企业名称和统一社会信用代码部分，缺少经营范围、注册资本、成立日期等关键信息，且影像边缘存在裁剪痕迹，影响证件真实性判断，已通知客户重新上传完整的营业执照原件照片。',
    status: '已解决',
  },
  {
    id: 'CASE005',
    type: '行为驱动归因-预约行为中断',
    branch: '北京分行',
    description: '客户因临时出差，无法按时到网点办理，主动申请撤销本次开户。',
    status: '处理中',
  },
  {
    id: 'CASE006',
    type: '行为驱动归因-预约行为中断',
    branch: '广州分行',
    description: '客户因公司内部决策调整，决定暂缓开户，已电话通知银行撤销。',
    status: '已解决',
  },
  // ...可继续补充更多类型案例
];

const Dashboard: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>(problemTypes[0].type);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const navigate = useNavigate();

  // 饼图配置
  const pieConfig = {
    data: problemTypes,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    label: {
      type: 'outer' as const,
      content: '{percentage}',
    },
    legend: {
      position: 'bottom' as const,
      flipPage: true,
      maxRow: 3,
    },
    tooltip: {
      formatter: (datum: any) => {
        return { name: datum.type, value: datum.value };
      },
    },
    interactions: [{ type: 'element-active' }],
    onReady: (plot: any) => {
      plot.on('element:click', (e: any) => {
        const { type } = e.data.data;
        setSelectedType(type);
        setSelectedBranch(null); // 切换类型时重置分行
      });
    },
  };

  // 条形图配置
  const columnConfig = {
    data: branchDistribution[selectedType] || [],
    xField: 'branch',
    yField: 'value',
    label: {
      position: 'middle' as const,
      style: {
        fill: '#fff',
        opacity: 0.8,
      },
    },
    color: ({ branch }: { branch: Branch }) =>
      branch === selectedBranch ? '#f5222d' : '#1890ff', // 高亮选中分行
    meta: {
      branch: { alias: '分行' },
      value: { alias: '问题数量' },
    },
    tooltip: {
      formatter: (datum: any) => {
        return { name: datum.branch, value: datum.value + '个案例' };
      },
    },
    interactions: [{ type: 'element-active' }],
    onReady: (plot: any) => {
      plot.on('element:click', (e: any) => {
        const branch = e.data.data.branch;
        setSelectedBranch((prev) => (prev === branch ? null : branch));
      });
    },
  };

  // 表格字段
  const columns = [
    {
      title: '案例编号',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '分行',
      dataIndex: 'branch',
      key: 'branch',
    },
    {
      title: '问题类型',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => <Tag>{type}</Tag>,
    },
    {
      title: '问题描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => <Tag color={status === '已解决' ? 'success' : 'processing'}>{status}</Tag>,
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Button 
          type="link" 
          onClick={() => navigate(`/efficiency-score/${record.id}`)}
        >
          查看效率评分
        </Button>
      ),
    },
  ];

  // 联动过滤
  const filteredTableData = tableData.filter((item) => {
    const matchType = item.type === selectedType;
    const matchBranch = selectedBranch ? item.branch === selectedBranch : true;
    return matchType && matchBranch;
  });

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card>
            <Statistic title="本月问题总数" value={42} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="已解决" value={28} valueStyle={{ color: '#3f8600' }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="处理中" value={14} valueStyle={{ color: '#cf1322' }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="平均解决时间" value="2.5" suffix="天" />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col span={12}>
          <Card title="问题类型占比（点击可联动）">
            <Pie {...pieConfig} />
          </Card>
        </Col>
        <Col span={12}>
          <Card title={`"${selectedType}"在各网点分布`}>
            <Column {...columnConfig} />
          </Card>
        </Col>
      </Row>
      <Card title="最近问题案例" style={{ marginTop: '16px' }}>
        <Table columns={columns} dataSource={filteredTableData} rowKey="id" />
      </Card>
    </div>
  );
};

export default Dashboard;
