import styled from 'styled-components'

type TotalCardProps = {
    total?: boolean
}

export const TotalCard = styled.div<TotalCardProps>`
    background-color: var(--white-900);
    color: var(--black-900);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;

    ${({ total }) => total && `
        background: var(--green-900);
        color: var(--white-900);
    `}
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Icon = styled.img`
    font-size: 18px;
    padding: 5px;
    border-radius: 5px;
    align-self: flex-end;
`

export const Strong = styled.div`
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
`