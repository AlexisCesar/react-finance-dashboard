import { CardItem } from '../CardItem';
import style from './card.module.scss';
import inflowIcon from '../../assets/images/inflow.png';
import outflowIcon from '../../assets/images/outflow.png';
import balanceIcon from '../../assets/images/balance.png';


export const Card = () => {

  // useTransactions
 
  return (
    <div className={style['card-container']}>
      <CardItem title='Inflow' icon={inflowIcon} value={0.00} />
      <CardItem title='Ouflow' icon={outflowIcon} value={0.00} />
      <CardItem title='Balance' icon={balanceIcon} value={0.00} total />
    </div>
  );
}

