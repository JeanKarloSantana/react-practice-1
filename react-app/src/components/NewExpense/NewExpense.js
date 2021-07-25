import React, { useState} from 'react';
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),            
        };
        props.onAddExpense(expenseData);        
    };
    
    const swapToNewExpenseView = () => {
        setView(prevView => {
            return newExpenseView

        });
    }
    
    const swapToAddExpenseView = () => {
        setView(prevView => {
    return addExpenseView
        });
    }
    
    const newExpenseView = <ExpenseForm onCancel={swapToAddExpenseView} onSaveExpenseData={saveExpenseDataHandler}/>
    
    const addExpenseView = <button onClick={swapToNewExpenseView}>New Expense</button>
    
    const [view, setView] = useState(addExpenseView);

    return (
        <div className="new-expense">
            {view}
        </div>
    )
}

export default NewExpense;