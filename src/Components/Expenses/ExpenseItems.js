import React, {useState} from 'react';  //use this when u want to use state specially
import './ExpenseItems.css' //use import .css to tell Expenseitems.js
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props){
    //props is object having all paramrters that we are passing to <ExpenseItems> in App.js
    //for getting the values use same parameter name in this Component file
    const[title, setTitle] = useState(props.title); //Working With state //fuction recalls when we use it
    const clickHandler = () => { //Another Kind of way to create function
      setTitle('Update!');
      console.log(title);
    } 
    return (
      <Card className="expense-item">
        <ExpenseDate date = {props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Edit</button>
      </Card>
    );
}
export default ExpenseItem;