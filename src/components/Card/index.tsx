import { useTransactions } from '../../hooks/useTransactions';
import { CardItem } from '../CardItem';
import style from './card.module.scss';
import inflowIcon from '../../assets/images/inflow.png';
import outflowIcon from '../../assets/images/outflow.png';
import balanceIcon from '../../assets/images/balance.png';


export const Card = () => {
  const { transactions } = useTransactions();

  const values = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === 1) {
        accumulator.inflow += transaction.value;
        accumulator.balance += transaction.value;
      } else {
        accumulator.outflow += transaction.value;
        accumulator.balance += transaction.value;
      }
      return accumulator;
    },
    {
      inflow: 0,
      outflow: 0,
      balance: 0,
    }
  );

  return (
    <div className={style['card-container']}>
      <CardItem title="Inflow" icon={inflowIcon} value={values.inflow} />
      <CardItem title="Outflow" icon={outflowIcon} value={values.outflow} />
      <CardItem title="Balance" icon={balanceIcon} value={values.balance} total />
    </div>
  );
};
