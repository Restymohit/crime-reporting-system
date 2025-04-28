export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'officer' | 'public';
  badge?: string;
  department?: string;
}