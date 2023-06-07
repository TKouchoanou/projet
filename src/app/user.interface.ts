export interface User {
  id: number;
  name: string;
  email: string;
  img?: string;
}

export const users: User[] = [
  {
    id: 1,
    name: 'Jean Yves',
    email: 'jean.yves@example.com',
    img: 'https://media.vanityfair.fr/photos/60d37425aad492b248d03622/4:3/w_956,h_717,c_limit/vf_john_wick_3_878.jpeg',
  },
  {
    id: 2,
    name: 'Adam Smith',
    email: 'adam.smith@example.com',
    img: 'https://i.stack.imgur.com/34AD2.jpg',
  },
  {
    id: 3,
    name: 'Mohamed Habib',
    email: 'mohamed.habib@example.com',
    img: 'https://i.stack.imgur.com/34AD2.jpg',
  },
];
