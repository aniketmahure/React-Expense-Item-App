import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = () =>{
    const saveFormDataHandler = (enteredData) =>{
        const expenseData = {
            ...enteredData,
            id : Math.random().toString()
        };
        console.log(expenseData);
    };
    return <div className="new-expense">
        <ExpenseForm saveFormData={saveFormDataHandler} ></ExpenseForm>
    </div>;
}
export default NewExpense;