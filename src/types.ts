export interface SubTask {
  id: string;
  title: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  progress: number;
  result: string;
  error?: string;
  created_at: string;
  updated_at: string;
} 