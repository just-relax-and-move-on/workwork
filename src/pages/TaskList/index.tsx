import React, { useState } from 'react';
import { Table, Card, Space, Tag, Button, Input, Typography } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import apiClient from '@/config/api';
import { API_ENDPOINTS } from '@/config/api';
import type { MainTask } from '@/types/task';

const { Title } = Typography;

const Container = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SearchCard = styled(Card)`
  margin-bottom: 24px;
`;

interface TaskListResponse {
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
  data: MainTask[];
}

const TaskList: React.FC = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const { data: taskListData, isLoading } = useQuery<TaskListResponse>({
    queryKey: ['taskList', currentPage, pageSize, searchText],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: currentPage.toString(),
        page_size: pageSize.toString(),
      });

      if (searchText) {
        params.append('search', searchText);
      }

      const response = await apiClient.get(`${API_ENDPOINTS.task.list}?${params.toString()}`);
      return response.data;
    },
  });

  const columns = [
    {
      title: '批次号',
      dataIndex: 'batch_no',
      key: 'batch_no',
      render: (text: string) => (
        <Button type="link" onClick={() => navigate(`/batch-query/${text}`)}>
          {text}
        </Button>
      ),
    },
    {
      title: '任务名称',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusConfig = {
          pending: { color: 'default', text: '等待中' },
          running: { color: 'processing', text: '进行中' },
          completed: { color: 'success', text: '已完成' },
          failed: { color: 'error', text: '失败' },
        };
        const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
        return <Tag color={config.color}>{config.text}</Tag>;
      },
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date: string) => format(new Date(date), 'yyyy-MM-dd HH:mm:ss', { locale: zhCN }),
    },
    {
      title: '完成时间',
      dataIndex: 'completed_at',
      key: 'completed_at',
      render: (date: string | null) => 
        date ? format(new Date(date), 'yyyy-MM-dd HH:mm:ss', { locale: zhCN }) : '-',
    },
  ];

  const handleSearch = () => {
    setCurrentPage(1); // 重置到第一页
  };

  return (
    <Container>
      <Title level={4}>任务列表</Title>
      
      <SearchCard>
        <Space direction="horizontal" size="middle">
          <Input
            placeholder="搜索批次号或任务名称"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 300 }}
            onPressEnter={handleSearch}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleSearch}
          >
            搜索
          </Button>
        </Space>
      </SearchCard>

      <Card>
        <Table
          columns={columns}
          dataSource={taskListData?.data}
          rowKey="id"
          loading={isLoading}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: taskListData?.total || 0,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条记录`,
            onChange: (page, size) => {
              setCurrentPage(page);
              setPageSize(size);
            },
          }}
        />
      </Card>
    </Container>
  );
};

export default TaskList; 