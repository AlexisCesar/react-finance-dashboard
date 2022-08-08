import style from './Line.module.scss';

interface LineProps{
    title: string,
    value: string,
    category: string, 
    date: string
}

export const Line = ({title, value, category, date} : LineProps) => {
    const negativeColor = value.includes("-") ? "negative-value" : "positive-value";
    const formatValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(Number(value));
    
    return (
        <tr className={style.line}>
            <td>{title}</td>
            <td className={style[negativeColor]}>{formatValue}</td>
            <td>{category}</td>
            <td>{date}</td>
        </tr>
    );
};