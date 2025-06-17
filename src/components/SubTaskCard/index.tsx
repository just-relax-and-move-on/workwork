import React from 'react';
import { Card, Progress, Tag, Typography } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SubTask } from '@/types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const { Text } = Typography;

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const StatusTag = styled(Tag)<{ status: string }>`
  font-size: 12px;
  padding: 2px 6px;
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

const MarkdownContent = styled.div`
  font-size: 14px;
  line-height: 1.8;
  margin-top: 8px;
  color: #333;
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 16px;
    margin-bottom: 12px;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 { font-size: 1.8em; }
  h2 { font-size: 1.4em; }
  h3 { font-size: 1.2em; }
  h4 { font-size: 1em; }

  p {
    margin-bottom: 12px;
  }

  ul, ol {
    padding-left: 2em;
    margin-bottom: 12px;
  }

  li {
    margin-bottom: 6px;
  }

  blockquote {
    margin: 12px 0;
    padding: 0 1em;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
  }

  code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27,31,35,0.05);
    border-radius: 3px;
  }

  pre {
    padding: 12px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    margin-bottom: 12px;
    border-spacing: 0;
    border-collapse: collapse;
  }

  table th {
    font-weight: 600;
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

  hr {
    height: 0.25em;
    padding: 0;
    margin: 16px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
  }
`;

interface SubTaskCardProps {
  task: SubTask;
}

const SubTaskCard: React.FC<SubTaskCardProps> = ({ task }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <StyledCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <Text strong>{task.origin_question}</Text>
          <StatusTag status={task.status}>{task.status}</StatusTag>
        </div>
        
        <Progress 
          percent={task.progress} 
          size="small" 
          status={task.status === 'failed' ? 'exception' : undefined}
        />
        
        {task.status === 'completed' && task.result && (
          <MarkdownContent>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {task.result}
            </ReactMarkdown>
          </MarkdownContent>
        )}
        
        {task.status === 'failed' && task.error && (
          <Text type="danger">{task.error}</Text>
        )}
      </StyledCard>
    </motion.div>
  );
};

export default SubTaskCard; 