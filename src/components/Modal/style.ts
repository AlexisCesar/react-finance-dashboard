import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: var(--overlay);

  input {
    display: block;
    margin: 1rem auto;
    padding: 1rem;

    width: 22rem;
    height: 1rem;

    border: 1px solid var(--grey-900);
    border-radius: 4px;
    background-color: var(--white-800);

    font-family: 'Poppins';

    &::placeholder {
      color: var(--grey-600);
    }

    transition: 0.4s;

    &:hover {
      filter: brightness(0.96);
    }
  }
  button {
    cursor: pointer;

    font-weight: 500;
    font-family: 'Poppins';

    border-radius: 4px;
    border: none;

    transition: 0.4s;

    &:hover {
      filter: brightness(0.94);
    }
  }
`;

export const ModalBox = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: var(--white-900);
  border-radius: 4px;

  box-shadow: 0px 2px 10px var(--box-shadow);

  margin: 0 auto;
  padding: 2rem;

  h2 {
    margin-bottom: 2rem;
    color: var(--title);
  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    margin: 2rem;
    cursor: pointer;

    img {
      width: 2rem;
    }

    button {
        width: 50%;
        padding: 1rem 1rem;
  
        border: 1px var(--grey-900) solid;
        background: var(--white-800);
  
        color: var(--grey-300);
  
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }
    }
  
    button {
      width: 100%;
      padding: 1rem 1rem;
      color: var(--white-900);
      background: var(--green-900);
    }
  }
`;

export const TransactionTypeModal = styled.div`
display: flex;
flex-direction: row;
gap: 0.5rem;

button {
  width: 50%;
  padding: 1rem 1rem;

  border: 1px var(--grey-900) solid;
  background: var(--white-800);

  color: var(--grey-300);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

}
`;



