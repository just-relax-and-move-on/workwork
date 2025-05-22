import React from 'react';
import { Card, Row, Col } from 'antd';
import { Line, Column } from '@ant-design/charts';

const problemList = [
  { main: "客户信息不一致或缺失", sub: "企业名称不符", text: "预约填写的企业名称与营业执照登记名称不一致，或已完成工商变更但预约仍使用旧名称，无法继续开户" },
  { main: "客户信息不一致或缺失", sub: "法人/证件信息错误", text: "提交的法定代表人姓名、身份证号等证件信息与工商登记或影像资料不一致，或存在缺失、过期情况" },
  { main: "客户信息不一致或缺失", sub: "无法查到企业信息", text: "通过统一社会信用代码无法在工商系统查到企业登记信息，企业信息缺失或不在有效状态" },
  { main: "客户信息不一致或缺失", sub: "工商信息未更新", text: "企业已在工商系统完成变更（如法人变更、名称变更等），但预约信息仍为旧数据，导致信息不一致" },
  { main: "客户信息不一致或缺失", sub: "联系方式错误", text: "预约填写的法人或业务经办人手机号错误、无效或无法接通，导致无法联系进行核实" },
  { main: "客户信息不一致或缺失", sub: "营业执照过期", text: "所提交的营业执照已过期，或系统校验发现登记状态为无效、吊销，无法满足开户要求" },
  { main: "影像资料缺失或不合格", sub: "未上传影像资料", text: "客户未上传营业执照、法人证件等开户所需的影像资料" },
  { main: "影像资料缺失或不合格", sub: "影像模糊或不清晰", text: "上传的影像资料模糊、不清晰或不能识别" },
  { main: "影像资料缺失或不合格", sub: "上传影像与信息不符", text: "上传影像内容与预约填写信息存在明显不符" },
  { main: "已存在账户或重复提交", sub: "客户已开户", text: "客户已经在我行或其他行开立账户，不应重复预约" },
];

const months = ['2023-12', '2024-01', '2024-02', '2024-03', '2024-04', '2024-05']; // 半年数据
const currentMonth = '2024-05';
const lastMonth = '2024-04';
const trendData: any[] = [];
const totalMap: Record<string, number> = {};

problemList.forEach((item, idx) => {
  let total = 0;
  months.forEach(month => {
    // 生成更真实的趋势数据：基础值 + 随机波动 + 季节性因素
    const baseValue = 20 - idx * 2; // 基础值随问题序号递减
    const randomFactor = Math.random() * 10 - 5; // -5 到 5 的随机波动
    const seasonalFactor = Math.sin((months.indexOf(month) / months.length) * Math.PI) * 5; // 季节性波动
    const value = Math.max(5, Math.floor(baseValue + randomFactor + seasonalFactor));
    
    trendData.push({
      month,
      value,
      problem: `${item.main} - ${item.sub}`,
      desc: item.text,
    });
    total += value;
  });
  totalMap[`${item.main} - ${item.sub}`] = total;
});

const sortedProblems = Object.entries(totalMap)
  .sort((a, b) => b[1] - a[1])
  .map(([problem]) => problem);

const top5Problems = sortedProblems.slice(0, 5);
const top10Problems = sortedProblems.slice(0, 10);

const trendTop5 = trendData.filter(d => top5Problems.includes(d.problem));
const barTop10 = top10Problems.map(problem => ({
  problem,
  value: totalMap[problem],
}));

const trendConfig = {
  data: trendTop5,
  xField: 'month',
  yField: 'value',
  seriesField: 'problem',
  tooltip: { fields: ['problem', 'desc', 'value', 'month'] },
  point: { size: 5, shape: 'diamond' },
  smooth: true, // 关键配置
};

const barConfig = {
  data: barTop10,
  xField: 'problem',
  yField: 'value',
  label: { position: 'middle', style: { fill: '#fff', opacity: 0.8 } },
  meta: { problem: { alias: '问题类型' }, value: { alias: '总量' } },
  tooltip: { fields: ['problem', 'value'] },
};

// 只取前5问题
type GroupBarDatum = { problem: string; month: string; value: number };
const groupBarData: GroupBarDatum[] = [];
top5Problems.forEach(problem => {
  // 找到本月、上月的数量
  const cur = trendData.find(d => d.problem === problem && d.month === currentMonth);
  const last = trendData.find(d => d.problem === problem && d.month === lastMonth);
  groupBarData.push(
    { problem, month: lastMonth, value: last ? last.value : 0 },
    { problem, month: currentMonth, value: cur ? cur.value : 0 }
  );
});

const groupBarConfig = {
  data: groupBarData,
  isGroup: true,
  xField: 'problem',
  yField: 'value',
  seriesField: 'month',
  color: ['#1890ff', '#f5222d'], // 修改为固定颜色数组
  label: {
    content: (originData: GroupBarDatum) => originData.value,
    style: { fill: '#fff', opacity: 0.8 },
  },
  meta: {
    problem: { alias: '问题类型' },
    value: { alias: '数量' },
    month: { alias: '月份' },
  },
  tooltip: { fields: ['problem', 'month', 'value'] },
};

const TrendAnalysis: React.FC = () => {
  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginBottom: '16px' }}>
        {/* 可加筛选器 */}
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="高发问题趋势分析（前5）">
            <Line {...trendConfig} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col span={24}>
          <Card title="高发问题本月/上月对比（前5）">
            <Column {...groupBarConfig} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TrendAnalysis;