export interface User {
  isLogin: boolean;
  id: number;
  token: string;
  role: number;
  response: {
    loading: boolean;
    error: number;
    message: string;
  };
  language: 'vi' | 'en';
}
