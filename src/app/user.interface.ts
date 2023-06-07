
export interface User {
    id: number;
    name: string;
    email: string;
  }

  export const users: User[] = [
    { id: 1, name: 'Jean Yves', email: 'jean.yves@example.com' },
    { id: 2, name: 'Adam Smith', email: 'adam.smith@example.com' },
    { id: 3, name: 'Mohamed Habib', email: 'mohamed.habib@example.com' }
  ];