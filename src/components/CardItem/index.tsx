import { FormatCurrencyUS } from "../../utils/FormatCurrency";
import style from "./cardItem.module.scss";

interface CardItemProps {
    title: string,
    value: number,
    icon : string,
    total? : boolean
}

export const CardItem = ({ title, value, icon, total } : CardItemProps) => {
    const totalCard = total ? `${style.total} ${style.card}` : style.card
    const formatedValue = FormatCurrencyUS(String(value));
    
    return (
        <div className={totalCard}>
        <div className={style['header']}>
          <p>{title}</p>
          <img src={icon} />
        </div>
        <div className={style['strong']}>
          <span>{formatedValue}</span>
        </div>
      </div>
    );
}