import { Line } from '../Line';
import style from './Table.module.scss';
import { useTransactions } from '../../hooks/useTransactions';

// const transactions = [
//   {
//     title: 'Web Development',
//     value: '12000.00',
//     category: 'Sale',
//     date: '07/13/2022',
//   },
//   { title: 'Burguer', 
//     value: '-59.00', 
//     category: 'Food', 
//     date: '07/10/2022' 
//   },
//   {
//     title: 'Rent',
//     value: '-1200.00',
//     category: 'Home',
//     date: '06/27/2022',
//   },
//   {
//     title: "Computer",
//     value:"5400.00",
//     category:"Sale",
//     date: "06/15/2022"
//   }
// ];

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
