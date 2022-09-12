import { Line } from '../Line';
import { useTransactions } from '../../hooks/useTransactions';
import { TableContainer, TableHead } from './styles';

export const Table = () => {
  const {transactions} = useTransactions();
  return (
    <TableContainer>
      <thead>
        <tr>
          <TableHead>Transaction Name</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
        </tr>
      </thead>
      <tbody>
<<<<<<< HEAD
        {transactions.map(({ description, value, category, date }) => (
          <Line description={description} value={value} category={category} date={date} />
=======
        {transactions.map(({ description, value, type, category, date }) => (
          <Line key={date.toString()} description={description} type={type} value={value} category={category} date={date} />
>>>>>>> 43aece4 (refactoring modal from css to styled-components)
        ))}
      </tbody>
    </TableContainer>
  );
};
