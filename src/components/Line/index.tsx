import style from './Line.module.scss';

interface LineProps{
    title: string,
    value: string,
    category: string, 
    date: Date
}

export const Line = ({title, value, category, date} : LineProps) => {
    const negativeColor = value.includes("-") ? "negative-value" : "positive-value";
    const formatValue = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(Number(value));

    const formatDate = new Intl.DateTimeFormat("en-US").format(date);
    
    return (
        <tr className={style.line}>
            <td>{title}</td>
            <td className={style[negativeColor]}>{formatValue}</td>
            <td>{category}</td>
            <td>{formatDate}</td>
        </tr>
    );
};