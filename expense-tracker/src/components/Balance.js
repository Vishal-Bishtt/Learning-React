import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
function Balance(){
    const {transactions} = useContext(GlobalContext); //useContext is used to access the state from the context

    const total = transactions.reduce((acc, transactions)=> acc +transactions.amount, 0).toFixed(2);

    return(
        <div>
            <h3>Your Balance</h3>
            <h1>${total}</h1>
        </div>
    );
}
export default Balance;


