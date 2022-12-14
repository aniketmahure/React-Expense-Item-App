import React, {useState} from "react";
import './ExpenseForm.css';
const ExpenseForm = () => {
    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const [enteredDate , setEnteredDate] = useState('');
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };
    const submitFormHandler = (event) =>{
        event.preventDefault();
       const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date : new Date(enteredDate)
       };
       console.log(expenseData)
       setEnteredTitle('');
       setEnteredAmount('');
       setEnteredDate('');
    };
    return (
      <form onSubmit={submitFormHandler}>
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">add expense</button>
        </div>
      </form>
    );
}
export default ExpenseForm;