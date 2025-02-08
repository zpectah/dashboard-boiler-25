export interface AppDefinition {
  key: string;
  token: string;
  init: boolean;
  app: {
    users: object;
    articles: object;
    payments: object;
  };
}
