import { FormatCurrencyUS } from '../../utils/FormatCurrency';
import { FormatDateUS } from '../../utils/FormatDate';
import style from './Line.module.scss';

interface LineProps{
    description: string,
    value: number,
    category: string, 
    date: Date
}

export const Line = ({description, value, category, date} : LineProps) => {
    const negativeColor = String(value).includes("-") ? "negative-value" : "positive-value";
    const formatValue = FormatCurrencyUS(value);
    const formatDate = FormatDateUS(date);    
    
    return (
        <tr className={style.line}>
            <td>{description}</td>
            <td className={style[negativeColor]}>{formatValue}</td>
            <td>{category}</td>
            <td>{formatDate}</td>
        </tr>
    );
};