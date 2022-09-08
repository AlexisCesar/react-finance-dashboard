import coinLogo from '../../assets/images/coinLogo.png';
import { Dispatch, SetStateAction } from 'react';
import { ArrowIcon, CoinImage, ContainerHeader, ContainerLogo, DivContainerLogo, LabelButton, Title, TransactionButton } from './styles';

interface Props {
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ setModalVisible }: Props) => {
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  return (
    <ContainerHeader>
      <ContainerLogo>
        <DivContainerLogo>
          <CoinImage src={coinLogo}></CoinImage>
          <Title>Financiados</Title>
        </DivContainerLogo>
        <TransactionButton onClick={handleOpenModal}>
          <LabelButton>New Transaction</LabelButton>
          <ArrowIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              ></path>
            </svg>
          </ArrowIcon>
        </TransactionButton>
      </ContainerLogo>
    </ContainerHeader>
  );
};
