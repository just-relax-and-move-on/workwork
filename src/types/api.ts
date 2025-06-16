export interface ApiKey {
  user_name: string;
  api_key: string;
  created_at: string;
  last_used_at?: string;
  is_active?: boolean;
}

export interface ApiKeyLog {
  api_key: string;
  ip_address: string;
  user_agent: string;
  endpoint: string;
  created_at: string;
  user_name: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}

export interface AuthResponse {
  token: string;
}

export interface ApiError {
  status: number;
  message: string;
} 