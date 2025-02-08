export interface PaymentsItem {
  id: number;
  uuid: string;
  created: string;
  status: string;
}

export type PaymentsItems = PaymentsItem[];
