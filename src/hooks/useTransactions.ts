import { useContext } from 'react';
import { TransactionsContext } from '../context/TransactionsContext';

export const useTransactions = () => {
  const { transactions, addTransaction } = useContext(TransactionsContext);

  return { transactions, addTransaction };
};
