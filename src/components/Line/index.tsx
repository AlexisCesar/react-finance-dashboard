import style from './Line.module.scss'

export const Line = () => {
    return (
        <tr className={style.line}>
            <td>Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
        </tr>
    );
};