import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  LineChartOutlined,
  RobotOutlined,
  BarChartOutlined,
  FileSearchOutlined,
  LogoutOutlined,
  DashboardOutlined,
  ApartmentOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

import Dashboard from './pages/Dashboard';
import TrendAnalysis from './pages/TrendAnalysis';
import CaseManagement from './pages/CaseManagement';
import AIRecommendation from './pages/AIRecommendation';
import EfficiencyScore from './pages/EfficiencyScore';
import TaskMonitor from './pages/TaskMonitor';
import ApiKeyAuth from './pages/ApiKeyAuth';
import { useApiKey } from './hooks/useApiKey';
import BatchQuery from '@/pages/BatchQuery';
import TaskList from '@/pages/TaskList';
import DueDiligence from '@/pages/DueDiligence';

const { Header, Content, Sider } = Layout;

const menuItems = [
  {
    key: '/dashboard',
    icon: <DashboardOutlined />,
    label: <Link to="/dashboard">首页</Link>,
  },
  {
    key: '/trend',
    icon: <LineChartOutlined />,
    label: <Link to="/trend">趋势分析</Link>,
  },
  {
    key: '/case',
    icon: <FileSearchOutlined />,
    label: <Link to="/case">案例管理</Link>,
  },
  {
    key: '/ai',
    icon: <RobotOutlined />,
    label: <Link to="/ai">AI推荐</Link>,
  },
  {
    key: '/efficiency',
    icon: <BarChartOutlined />,
    label: <Link to="/efficiency">效率评分</Link>,
  },
  {
    key: '/task',
    icon: <ApartmentOutlined />,
    label: <Link to="/task">任务监控</Link>,
  },
  {
    key: '/task-list',
    icon: <UnorderedListOutlined />,
    label: <Link to="/task-list">任务列表</Link>,
  },
];

// 路由守卫组件
const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { authToken } = useApiKey();
  const location = useLocation();

  // 如果没有认证Token且不在认证页面，重定向到认证页面
  if (!authToken && location.pathname !== '/auth') {
    return <Navigate to="/auth" replace />;
  }

  // 如果有认证Token且在认证页面，重定向到 dashboard
  if (authToken && location.pathname === '/auth') {
    return <Navigate to="/dashboard" replace />;
  }

  // 其他情况正常渲染
  return <>{children}</>;
};

function AppLayout() {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1] || 'dashboard';
  const isEfficiencyScore = location.pathname.startsWith('/efficiency-score/');
  const isTaskMonitor = location.pathname.startsWith('/task/');
  const isBatchQuery = location.pathname.startsWith('/batch-query/');
  const isTaskList = location.pathname.startsWith('/task-list');
  const { removeApiKey } = useApiKey();

  const handleLogout = () => {
    removeApiKey();
    window.location.href = '/auth';
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div style={{ height: 32, margin: 16, color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
          开户问题归因系统
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[
            isEfficiencyScore ? '/efficiency' : 
            isTaskMonitor ? '/task' : 
            isBatchQuery ? '/task-list' :
            isTaskList ? '/task-list' :
            `/${currentPath}`
          ]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 16px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <LogoutOutlined onClick={handleLogout} style={{ fontSize: '18px', cursor: 'pointer' }} />
        </Header>
        <Content style={{ margin: '16px' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trend" element={<TrendAnalysis />} />
            <Route path="/case" element={<CaseManagement />} />
            <Route path="/ai" element={<AIRecommendation />} />
            <Route path="/efficiency" element={<EfficiencyScore />} />
            <Route path="/efficiency-score/:id" element={<EfficiencyScore />} />
            <Route path="/task" element={<TaskMonitor />} />
            <Route path="/task-list" element={<TaskList />} />
            <Route path="/batch-query/:batchNo" element={<BatchQuery />} />
            <Route path="/due-diligence/:batchNo" element={<DueDiligence />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <PrivateRoute>
        <Routes>
          <Route path="/auth" element={<ApiKeyAuth />} />
          <Route path="/*" element={<AppLayout />} />
        </Routes>
      </PrivateRoute>
    </Router>
  );
};

export default App;