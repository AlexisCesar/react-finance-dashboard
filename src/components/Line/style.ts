import styled, { css } from 'styled-components';

interface TableDataProps {
  transactionType?: number;
}

export const TableRow = styled.tr``;

export const TableData = styled.td<TableDataProps>`
  background-color: var(--white-900);
  padding: 16px 32px;

  color: ${({transactionType}) => transactionType === 0 ? "var(--red-900)" :  transactionType === 1 ? "var(--green-900)" : "var(--text)" }
`;
