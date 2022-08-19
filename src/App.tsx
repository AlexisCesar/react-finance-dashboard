import './App.scss';
import { TransactionsContextProvider } from './context/TransactionsContext';
import { Home } from './pages';

const App = () => {
  return (
    <div className="App">
      <TransactionsContextProvider>
        <Home />
      </TransactionsContextProvider>
    </div>
  );
};

export default App;
