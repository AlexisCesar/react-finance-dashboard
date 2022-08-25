import { createContext, useState } from 'react';
import { Transaction } from '../interfaces/Transaction';

export const TransactionsContext = createContext({
  transactions: [] as Transaction[],
  addTransaction: (transaction: Transaction) => {},
});

export const TransactionsContextProvider = ({ children }: any) => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      description: "Hamburger",
      value: -300,
      type: 0,
      category: "Food",
      date: new Date()
    }
  ]);

  function addTransaction(transaction: Transaction) {
    setTransactions((prev) => [...prev, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
