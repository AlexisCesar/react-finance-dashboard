import { CardItem } from '../CardItem';
import style from './card.module.scss';
import incomeIcon from '../../assets/images/income.png';
import outcomeIcon from '../../assets/images/outcome.png';
import balanceIcon from '../../assets/images/balance.png';


export const Card = () => {

  // useTransactions
 
  return (
    <div className={style['card-container']}>
      <CardItem title='Entradas' icon={incomeIcon} value={0.00} />
      <CardItem title='Saídas' icon={outcomeIcon} value={0.00} />
      <CardItem title='Total' icon={balanceIcon} value={0.00} total />
    </div>
  );
}

