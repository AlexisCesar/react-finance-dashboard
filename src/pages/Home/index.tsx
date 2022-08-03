import { Card } from '../../components';
import style from './Home.module.scss';

export const Home = () => {
  return (
    <div className={style['container']}>
      <Card />
    </div>
  );
};
