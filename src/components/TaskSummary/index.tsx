import React from 'react';
import { Card, Typography, Space } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { TaskSummary as TaskSummaryType } from '@/types/task';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const { Text } = Typography;

const StyledCard = styled(motion.div)`
  margin-top: 16px;
`;

const MarkdownContent = styled.div`
  font-size: 14px;
  line-height: 1.8;
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.25em; }
  h4 { font-size: 1em; }

  p {
    margin-bottom: 16px;
  }

  ul, ol {
    padding-left: 2em;
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }

  blockquote {
    margin: 16px 0;
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
    padding: 16px;
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
    margin-bottom: 16px;
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
    margin: 24px 0;
    background-color: #e1e4e8;
    border: 0;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
  }
`;

interface TaskSummaryProps {
  summary: TaskSummaryType;
}

const TaskSummary: React.FC<TaskSummaryProps> = ({ summary }) => {
  return (
    <StyledCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Text strong>问题：</Text>
          <MarkdownContent>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {summary.summary_question}
            </ReactMarkdown>
          </MarkdownContent>
          <Text strong>回答：</Text>
          <MarkdownContent>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {summary.summary_answer}
            </ReactMarkdown>
          </MarkdownContent>
        </Space>
      </Card>
    </StyledCard>
  );
};

export default TaskSummary; 