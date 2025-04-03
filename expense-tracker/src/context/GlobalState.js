import React, { createContext, useReducer, useEffect} from 'react';

const initialState = {
    transactions:JSON.parse(localStorage.getItem("transactions")) || [],
};

export const GlobalContext = createContext(initialState); //Will be used to provide the state to the components

//Reducer function
const AppReducer = (state , action) => {
    switch(action.type){
        case "ADD_TRANSACTION":
            return{...state,transactions:[action.payload, ...state.transactions]};
        case "DELETE_TRANSACTION":
            return{...state,transactions:state.transactions.filter(transaction => transaction.id !== action.payload)};
        default:
            return state;
    }
}
//Will be used to wrap the components that need access to the state
export const GlobalProvider = ({ children }) => {  
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(state.transactions));
      }, [state.transactions]);
    
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    };

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id });
    };
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
};  