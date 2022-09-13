import { FormatCurrencyUS } from "../../utils/FormatCurrency";
import style from "./cardItem.module.scss";
import { TotalCard, Header, Icon, Strong } from "./styles"

interface CardItemProps {
  title: string,
  value: number,
  icon: string,
  total?: boolean
}

export const CardItem = ({ title, value, icon, total }: CardItemProps) => {
  const formattedValue = FormatCurrencyUS(value);

  return (
    <TotalCard total={total}>
      <Header>
        <p>{title}</p>
        <Icon src={icon} />
      </Header>
      <Strong>
        <span>{formattedValue}</span>
      </Strong>
    </TotalCard>
  );
}