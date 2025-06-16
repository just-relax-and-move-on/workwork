import { useQuery } from '@tanstack/react-query';
import { MainTask, SubTask, TaskSummary } from '@/types';
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
      const data = response.data;
      return {
        id: 0,
        batch_no: batchNo,
        title: '企业尽调分析任务',
        status: data.status || 'pending',
        created_at: data.created_at || new Date().toISOString(),
        completed_at: data.completed_at || null
      };
    },
    refetchInterval: 5000,
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
      const tasks = response.data;
      return tasks.map((task: any) => ({
        id: task.id || 0,
        question_no: task.question_no || '',
        origin_question: task.origin_question || '',
        status: task.status || 'pending',
        result: task.result,
        created_at: task.created_at || new Date().toISOString(),
        progress: task.status === 'completed' ? 100 : 
                 task.status === 'running' ? 50 :
                 task.status === 'failed' ? 0 : 0
      }));
    },
    refetchInterval: 5000,
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
      const data = response.data;
      return {
        summary_question: data.summary_question || '',
        summary_answer: data.summary_answer || '',
        status: data.status || 'pending'
      };
    },
    refetchInterval: 5000,
    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    enabled: !!batchNo && mainTask?.status === 'completed',
  });

  return {
    mainTask,
    subTasks,
    summary,
    isLoading: isMainTaskLoading || isSubTasksLoading || isSummaryLoading,
    error: mainTaskError || subTasksError || summaryError,
  };
}; 