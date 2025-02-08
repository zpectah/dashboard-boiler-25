export interface UsersItem {
  id: number;
  email: string;
  password: string;
  created: string;
  updated: string;
  active: boolean;
  deleted: boolean;
  name: string;
  surname: string;
}

export type UsersItems = UsersItem[];
