import styled from 'styled-components';

export const ContainerHeader = styled.header`
    background-color: var(--blue-800);
    height: 180px;
    width: 100%;
    padding-top: 30px;
    display: flex;
`;

export const ContainerLogo = styled.div`
    display: flex;
    flex-direction: row;
    width: 1120px;
    height: 60px;
    margin: 0 auto;
    align-items: center;
`;

export const DivContainerLogo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const CoinImage = styled.img`
    height: 60px;
    width: 60px;
`;

export const Title = styled.h1`
    font-weight: 400;
    font-size: 2.5rem;
    margin: 0;
    margin-left: 13px;
    color: var(--white-900);
    line-height: 3rem;
    letter-spacing: 2px;
    padding: 0;
`;

export const TransactionButton = styled.button`
    position: relative;
    font-size: 14px;
    letter-spacing: 3px;
    height: 3em;
    padding: 0 2em;
    border: none;
    background-color: var(--blue-900);
    color: var(--white-900);
    text-transform: uppercase;
    overflow: hidden;
    border-radius: 7px;
    margin-left: auto;

    &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        bottom: 0;
        left: 0;
        height: 0px;
        width: 100%;
        background: linear-gradient(
          90deg,
          var(--purple-800),
          var(--purple-500)
        );
        transition: 0.2s;
    }

    &:hover::before {
        height: 100%;
    }

    &:hover span{
        top: 0;
        opacity: 1;
    }
`;

export const LabelButton = styled.span`
    position: relative;
    margin: 0 7px 0 4px;
`;

export const ArrowIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    width: 3em;
    position: absolute;
    top: 3em;
    right: 0;
    opacity: 0;
    transition: 0.4s;
`;