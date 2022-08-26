import { useTransactions } from '../../hooks/useTransactions';
import { Line } from '../Line';
import style from './Table.module.scss';


export const Table = () => {
  const {transactions} = useTransactions();

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Value</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ description, value, category, date }) => (
          <Line title={description} value={String(value)} category={category} date={date} />
        ))}
      </tbody>
    </table>
  );
};
