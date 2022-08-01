import style from './modal.module.scss';

export const Modal = () => {
  return (
    <>
      <div className={style["modal-wrapper"]}>
        <div className={style["modal-box"]}>
          <span>
            <img src="src\assets\images\close-button.png" />
          </span>
          <h2>Create Transaction</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Price" min={0} />

            <div className={style["transaction-type"]}>
              <button className={style["income"]}>
                <img src="src\assets\images\income.png" />
                Income
              </button>
              <button className={style["outcome"]}>
                <img src="src\assets\images\outcome.png" />
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