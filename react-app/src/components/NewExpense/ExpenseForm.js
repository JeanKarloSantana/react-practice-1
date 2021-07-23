import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    
    const [title, setEnteredTitle] = useState('');
    const [amount, setEnteredAmount] = useState('');
    const [date, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    //Other approach
    /*const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value} 
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
    }*/

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };  
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
                <label>Title</label>
                <input 
                    type='text' 
                    value={title}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='text' value={amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' value={date} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__acrtions"></div>
        <button type='submit'>Add Expense</button>
    </form>    
    )
}

export default ExpenseForm;