import style from './modal.module.scss';
import incomeIcon from "../../assets/images/income.png";
import outcomeIcon from "../../assets/images/outcome.png";
import closeIcon from "../../assets/images/close-button.png";

export const Modal = () => {
  return (
    <>
      <div className={style["modal-wrapper"]}>
        <div className={style["modal-box"]}>
          <span>
            <img src={closeIcon} />
          </span>
          <h2>Create Transaction</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Price" min={0} />

            <div className={style["transaction-type"]}>
              <button className={style["income"]}>
                <img src={incomeIcon} />
                Income
              </button>
              <button className={style["outcome"]}>
                <img src={outcomeIcon}/>
                Outcome
              </button>
            </div>

            <input type="text" placeholder="Category" />
            <button>Create</button>
          </form>
        </div>
      </div>
    </>
  );
};