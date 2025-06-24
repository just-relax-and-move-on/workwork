import { useQuery, useQueryClient } from '@tanstack/react-query';
import { MainTask, SubTask, TaskSummary } from '@/types/task';
import { API_ENDPOINTS } from '@/config/api';
import apiClient from '@/config/api';

interface UseTaskPollingResult {
  mainTask: MainTask | undefined;
  subTasks: SubTask[] | undefined;
  summary: TaskSummary | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useTaskPolling = (batchNo: string): UseTaskPollingResult => {
  const queryClient = useQueryClient();

  const {
    data: mainTask,
    isLoading: isMainTaskLoading,
    error: mainTaskError,
  } = useQuery<MainTask>({
    queryKey: ['taskStatus', batchNo],
    queryFn: async () => {
      if (!batchNo) {
        throw new Error('No batch number provided');
      }
      const response = await apiClient.get(API_ENDPOINTS.task.status(batchNo));
      console.log('Main task response:', response.data);
      return {
        id: response.data.id || 0,
        batch_no: batchNo,
        title: response.data.title || '企业尽调分析任务',
        status: response.data.status || 'pending',
        created_at: response.data.created_at || new Date().toISOString(),
        completed_at: response.data.completed_at || null
      };
    },
    refetchInterval: (query) => {
      const data = query.state.data;
      return data?.status === 'completed' || data?.status === 'failed' ? false : 5000;
    },
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    enabled: !!batchNo,
  });

  const {
    data: subTasks,
    isLoading: isSubTasksLoading,
    error: subTasksError,
  } = useQuery<SubTask[]>({
    queryKey: ['taskQuestions', batchNo],
    queryFn: async () => {
      if (!batchNo) {
        throw new Error('No batch number provided');
      }
      const response = await apiClient.get(API_ENDPOINTS.task.questions(batchNo));
      console.log('Sub tasks response:', response.data);
      
      if (!Array.isArray(response.data)) {
        console.warn('Unexpected sub tasks response format:', response.data);
        return [];
      }

      return response.data.map((task: any) => ({
        id: task.id || 0,
        question_no: task.question_no || '',
        origin_question: task.origin_question || '',
        status: task.status || 'pending',
        result: task.result || '',
        created_at: task.created_at || new Date().toISOString(),
        progress: task.status === 'completed' ? 100 : 
                 task.status === 'running' ? 50 :
                 task.status === 'failed' ? 0 : 0
      }));
    },
    refetchInterval: (query) => {
      const data = query.state.data;
      return data && data.length > 0 && data.every(task => task.status === 'completed' || task.status === 'failed') ? false : 5000;
    },
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    enabled: !!batchNo,
  });

  const {
    data: summary,
    isLoading: isSummaryLoading,
    error: summaryError,
  } = useQuery<TaskSummary>({
    queryKey: ['taskSummary', batchNo],
    queryFn: async () => {
      if (!batchNo) {
        throw new Error('No batch number provided');
      }
      const response = await apiClient.get(API_ENDPOINTS.task.summary(batchNo));
      console.log('Summary response:', response.data);
      return {
        summary_question: response.data.summary_question || '',
        summary_answer: response.data.summary_answer || '',
        status: response.data.status || 'pending'
      };
    },
    refetchInterval: (query) => {
      const data = query.state.data;
      return data?.status === 'completed' || data?.status === 'failed' ? false : 5000;
    },
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    enabled: !!batchNo && mainTask?.status === 'completed',
  });

  // 添加调试日志
  console.log('Task polling state:', {
    mainTask,
    subTasks,
    summary,
    isLoading: isMainTaskLoading || isSubTasksLoading || isSummaryLoading,
    error: mainTaskError || subTasksError || summaryError
  });

  return {
    mainTask,
    subTasks,
    summary,
    isLoading: isMainTaskLoading || isSubTasksLoading || isSummaryLoading,
    error: mainTaskError || subTasksError || summaryError,
  };
}; 