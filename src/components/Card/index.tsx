import { CardItem } from '../CardItem';
import inflowIcon from '../../assets/images/inflow.png';
import outflowIcon from '../../assets/images/outflow.png';
import balanceIcon from '../../assets/images/balance.png';
import { useTransactions } from '../../hooks/useTransactions';
import { TransactionType } from '../../interfaces/enums/TransactionType';
import { CardContainer } from './styles'


export const Card = () => {

  const { transactions } = useTransactions();
  var inflow = 0;
  var outflow = 0;
  var balance = 0;

  transactions.forEach(transaction => {
    if (transaction.type == TransactionType.INFLOW)
      inflow += transaction.value;
    else
      outflow += transaction.value;

    balance += transaction.value;
  });
 
  return (
    <CardContainer>
      <CardItem title='Inflow' icon={inflowIcon} value={inflow} />
      <CardItem title='Outflow' icon={outflowIcon} value={outflow} />
      <CardItem title='Balance' icon={balanceIcon} value={balance} total />
    </CardContainer>
  );
}

