import { Card } from '../../components';
import style from './Home.module.scss';
import { Header } from '../../components/header';

export const Home = () => {
  return (
    <div className={style['container']}>
      <Card />
      <Header />
    </div>
  );
};
