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