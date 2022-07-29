import style from './modal.module.scss';

export const Modal = () => {
    return (
        <>
            <div className={style["modal-wrapper"]}>
                <div className={style["modal-box"]}>
                    <span>x</span>
                    <h2>Create Transaction</h2>
                    <input type="text" placeholder="Name" />
                    <input type="number" placeholder="Price" />

                    <div className={style["transaction-type"]}>
                        <button>Income</button>
                        <button>Outcome</button>
                    </div>

                    <input type="text" placeholder="Category" />
                    <button>Create</button>
                </div>
            </div>
        </>
    );
};