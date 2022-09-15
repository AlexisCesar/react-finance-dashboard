import inflowIcon from '../../assets/images/inflow.png';
import outflowIcon from '../../assets/images/outflow.png';
import closeIcon from '../../assets/images/close-button.png';
import { useState } from 'react';
import { TransactionType } from '../../interfaces/enums';
import { Transaction } from '../../interfaces/Transaction';
import { useTransactions } from '../../hooks/useTransactions';
import { ModalBox, ModalWrapper, TransactionTypeModal } from './style';

interface Props {
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ setModalVisible }: Props) => {
  const { transactions, addTransaction } = useTransactions();

  const [transactionName, setTransactionName] = useState<string>('');
  const [transactionValue, setTransactionValue] = useState<number>(0);
  const [transactionType, setTransactionType] = useState<TransactionType>(
    TransactionType.INFLOW
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
        transactionType == TransactionType.INFLOW
          ? transactionValue
          : transactionValue * -1,
    };

    addTransaction(newTransaction);

    setTransactionName('');
    setTransactionValue(0);
    setTransactionType(TransactionType.INFLOW);
    setTransactionCategory('');

    setModalVisible(false);
  };

  return (
    <div>
      <ModalWrapper>
        <ModalBox>
          <span onClick={() => setModalVisible(false)}>
            <img alt="close button" src={closeIcon} />
          </span>

          <h2>Create Transaction</h2>

          <form role="form" onSubmit={handleSubmit}>
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

            <TransactionTypeModal>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTransactionType(TransactionType.INFLOW);
                }}
              >
                <img src={inflowIcon} />
                Inflow
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setTransactionType(TransactionType.OUTFLOW);
                }}
              >
                <img src={outflowIcon} />
                Outflow
              </button>
            </TransactionTypeModal>

            <p>
              Selected type: {transactionType == TransactionType.INFLOW ? 'Inflow' : 'Outflow'}
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
        </ModalBox>
      </ModalWrapper>
    </div>
  );
};
