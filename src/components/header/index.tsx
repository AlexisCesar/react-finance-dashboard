import style from './header.module.scss';
import coinLogo from '../../assets/coinLogo.png';

export const Header = () => {
  return (
    <div className={style.containerHeader}>
      <header>
        <div className={style.containerLogo}>
          <img src={coinLogo}></img>
          <h1 className={style.title}>financiados</h1>
          <button>
            <span className="label">Nova Transação</span>
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </header>
    </div>
  );
};
