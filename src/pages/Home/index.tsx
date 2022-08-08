import { Card } from '../../components';
import style from './Home.module.scss';
import { Header } from '../../components/header';

export const Home = () => {
  return (
    <div>
      <Header />
      <div className={style['container']}>
        <Card />
      </div>
    </div>
  );
};
