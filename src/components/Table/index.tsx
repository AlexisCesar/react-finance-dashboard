import { Line } from "../Line";
import style from "./Table.module.scss";

export const Table = ()=> {
    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Preço</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <Line/>
                <Line/>
                <Line/>
                <Line/>
            </tbody>
        </table>
    );
};