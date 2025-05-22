import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  LineChartOutlined,
  SolutionOutlined,
  RobotOutlined,
} from '@ant-design/icons';

import Dashboard from './pages/Dashboard';
import TrendAnalysis from './pages/TrendAnalysis';
import CaseManagement from './pages/CaseManagement';
import AIRecommendation from './pages/AIRecommendation';

const { Header, Content, Sider } = Layout;

const menuItems = [
  {
    key: '/dashboard',
    icon: <PieChartOutlined />,
    label: <Link to="/dashboard">问题监控看板</Link>,
  },
  {
    key: '/trend',
    icon: <LineChartOutlined />,
    label: <Link to="/trend">趋势分析</Link>,
  },
  {
    key: '/case',
    icon: <SolutionOutlined />,
    label: <Link to="/case">案例管理</Link>,
  },
  {
    key: '/ai',
    icon: <RobotOutlined />,
    label: <Link to="/ai">AI智能建议</Link>,
  },
];

function AppLayout() {
  const location = useLocation();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div style={{ height: 32, margin: 16, color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
          开户问题归因系统
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '16px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trend" element={<TrendAnalysis />} />
            <Route path="/case" element={<CaseManagement />} />
            <Route path="/ai" element={<AIRecommendation />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

const App: React.FC = () => (
  <Router>
    <AppLayout />
  </Router>
);

export default App;