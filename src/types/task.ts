export type TaskStatus = 'pending' | 'running' | 'completed' | 'failed';

export interface MainTask {
  id: number;
  batch_no: string;
  title: string;
  status: TaskStatus;
  created_at: string;
  completed_at: string | null;
}

export interface SubTask {
  id: number;
  question_no: string;
  origin_question: string;
  status: TaskStatus;
  result?: string;
  created_at: string;
  progress?: number;
  error?: string;
  title?: string;
  updated_at?: string;
  has_valid_data?: number; // 1: 有效内容, 0: 无内容
}

export interface TaskSummary {
  summary_question: string;
  summary_answer: string;
  status: TaskStatus;
}

export interface TaskResponse {
  mainTask: MainTask;
  subTasks: SubTask[];
  summary?: TaskSummary;
} 