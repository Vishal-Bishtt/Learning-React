import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TranctionList';
import AddTransaction from './components/AddTranction';

function App() {
  return (
    <GlobalProvider>
      <div className = "app">
        <Header />
        <div className = "container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
