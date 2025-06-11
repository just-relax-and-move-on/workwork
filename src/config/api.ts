export const API_BASE_URL = 'http://127.0.0.1:5000';

export const API_ENDPOINTS = {
  task: {
    status: (batchNo: string) => `/api/task/${batchNo}/status`,
    questions: (batchNo: string) => `/api/task/${batchNo}/questions`,
    summary: (batchNo: string) => `/api/task/${batchNo}/summary`,
  },
}; 