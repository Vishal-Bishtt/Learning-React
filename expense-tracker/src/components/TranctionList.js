import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function TransactionList() {
    const {transactions, deleteTransaction} = useContext(GlobalContext);
    return(
        <div>
            <h3>
                History
            </h3>
            <ul className='list'>
                {transactions.map((transactions)=>(
                    <li key={transactions.id} className={transactions.amount<0? 'minus' : 'plus'}>
                        {transactions.text} <span>${Math.abs(transactions.amount)}</span>
                        <button onClick={() => deleteTransaction(transactions.id)} className='delete-btn'>x</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default TransactionList;