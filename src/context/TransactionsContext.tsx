import { createContext, useState } from 'react';
import { Transaction } from '../interfaces/Transaction';

export const TransactionsContext = createContext({
  transactions: [] as Transaction[],
  addTransaction: (transaction: Transaction) => {},
});

export const TransactionsContextProvider = ({ children }: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  function addTransaction(transaction: Transaction) {
    setTransactions((prev) => [...prev, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
