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

export const Line = ({ description, value, type, category, date }: LineProps) => {
  // const negativeColor = String(value).includes('-') ? true : false;
  const formatValue = FormatCurrencyUS(value);
  const formatDate = FormatDateUS(date);
  const test = type === 0;


  return (
    <TableRow>
      <TableData>{description}</TableData>
      <TableData transactionType={type}>{formatValue}</TableData>
      <TableData >{category}</TableData>
      <TableData >{formatDate}</TableData>
    </TableRow>
  );
};
