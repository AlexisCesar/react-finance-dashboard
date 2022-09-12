import { Line } from '../Line';
import style from './Table.module.scss';
import { useTransactions } from '../../hooks/useTransactions';

export const Table = () => {
  const {transactions} = useTransactions();
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Transaction Name</th>
          <th>Value</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ description, value, category, date }) => (
          <Line description={description} value={String(value)} category={category} date={date} />
        ))}
      </tbody>
    </table>
  );
};
