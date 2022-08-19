import { TransactionType } from './enums/TransactionType';

export interface Transaction {
  description: string;
  value: number;
  type: TransactionType;
  category: string;
  date: Date;
}
