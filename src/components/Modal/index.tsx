import style from './modal.module.scss';
import incomeIcon from '../../assets/images/income.png';
import outcomeIcon from '../../assets/images/outcome.png';
import closeIcon from '../../assets/images/close-button.png';
import { useState } from 'react';
import { TransactionType } from '../../interfaces/enums';
import { Transaction } from '../../interfaces/Transaction';
import { useTransactions } from '../../hooks/useTransactions';

interface Props {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ setModalVisible }: Props) => {
  const { transactions, addTransaction } = useTransactions();

  const [transactionName, setTransactionName] = useState<string>('');
  const [transactionValue, setTransactionValue] = useState<number>(0);
  const [transactionType, setTransactionType] = useState<TransactionType>(
    TransactionType.INBOUND
  );
  const [transactionCategory, setTransactionCategory] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let newTransaction: Transaction = {
      date: new Date(),
      category: transactionCategory,
      description: transactionName,
      type: transactionType,
      value:
        transactionType == TransactionType.INBOUND
          ? transactionValue
          : transactionValue * -1,
    };

    addTransaction(newTransaction);

    setTransactionName('');
    setTransactionValue(0);
    setTransactionType(TransactionType.INBOUND);
    setTransactionCategory('');

    setModalVisible(false);
  };

  return (
    <>
      <div className={style['modal-wrapper']}>
        <div className={style['modal-box']}>
          <span onClick={() => setModalVisible(false)}>
            <img src={closeIcon} />
          </span>

          <h2>Create Transaction</h2>

          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setTransactionName(e.target.value)}
                value={transactionName}
                required
              />
            </label>

            <label>
              <input
                type="number"
                placeholder="Price"
                min={0}
                max={100000.0}
                step={'0.01'}
                onChange={(e) => {
                  if (e.target.value == '') return;

                  let value: number = parseFloat(e.target.value);

                  setTransactionValue(parseFloat(value.toFixed(2)));
                }}
                required
              />
            </label>

            <div className={style['transaction-type']}>
              <button
                className={style['income']}
                onClick={(e) => {
                  e.preventDefault();
                  setTransactionType(TransactionType.INBOUND);
                }}
              >
                <img src={incomeIcon} />
                Income
              </button>

              <button
                className={style['outcome']}
                onClick={(e) => {
                  e.preventDefault();
                  setTransactionType(TransactionType.OUTBOUND);
                }}
              >
                <img src={outcomeIcon} />
                Outcome
              </button>
            </div>

            <p>
              Selected type:{' '}
              {transactionType == TransactionType.INBOUND
                ? 'Income'
                : 'Outcome'}
            </p>

            <label>
              <input
                type="text"
                placeholder="Category"
                onChange={(e) => setTransactionCategory(e.target.value)}
                value={transactionCategory}
                required
              />
            </label>

            <button type={'submit'}>Create</button>
          </form>
        </div>
      </div>
    </>
  );
};
