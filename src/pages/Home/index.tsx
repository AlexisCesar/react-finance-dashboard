import { Card } from '../../components';
import { useState } from 'react';
import { Modal } from '../../components';
import { useTransactions } from '../../hooks/useTransactions';
import style from './Home.module.scss';
import { Header } from '../../components/header';
import { Table } from '../../components/Table';

export const Home = () => {
  const { transactions } = useTransactions();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <div className={style['home-container']}>
      <Header setModalVisible={setModalVisible} />
      <div className={style['home-card-container']}>
        <Card />
      </div>
      <Table />
      {modalVisible && (
        <div className={style['home-modal-container']}>
          <Modal setModalVisible={setModalVisible} />
        </div>
      )}
    </div>
  );
};
