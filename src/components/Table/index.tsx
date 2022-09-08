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
        {transactions.map(({ description, value, category, date }) => (
          <Line description={description} value={value} category={category} date={date} />
        ))}
      </tbody>
    </TableContainer>
  );
};
