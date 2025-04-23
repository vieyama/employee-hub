export interface Employee {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  basicSalary: number;
  position: string;
  group: string;
  profileImage?: string;
  description: string;
  status: 'active' | 'inactive' | 'on-leave';
}

export interface Group {
  id: number;
  name: string;
}

export interface Position {
  id: number;
  title: string;
  group: number;
}
