import { FormatCurrencyUS } from '../../utils/FormatCurrency';
import { FormatDateUS } from '../../utils/FormatDate';
import { TableData, TableRow } from './style';

interface LineProps {
  description: string;
  value: number;
  type: number;
  category: string;
  date: Date;
}

export const Line = ({
  description,
  value,
  type,
  category,
  date,
}: LineProps) => {
  const formatValue = FormatCurrencyUS(value);
  const formatDate = FormatDateUS(date);

  return (
    <TableRow>
      <TableData>{description}</TableData>
      <TableData transactionType={type}>{formatValue}</TableData>
      <TableData>{category}</TableData>
      <TableData>{formatDate}</TableData>
    </TableRow>
  );
};
