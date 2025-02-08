export interface ArticlesItem {
  id: number;
  name: string;
  created: string;
  updated: string;
  active: boolean;
  deleted: boolean;
}

export type ArticlesItems = ArticlesItem[];
