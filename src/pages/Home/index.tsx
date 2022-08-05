import { Card } from '../../components';
import style from './Home.module.scss';
import { Header } from '../../components/Header';
import { Table } from '../../components/Table';

export const Home = () => {
  return (
    <div>
      <Header />
      <div className={style['container']}>
        <Card />
      </div>
      <Table />
    </div>
  );
};
