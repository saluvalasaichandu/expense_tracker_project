import React from 'react'
import { useContext } from "react";
import ExpenseContext from '../../Store/ExpenseContext';
const ETList = (props) => {
  const expCntxt = useContext(ExpenseContext);
  return (
    <div>
      <div >{props.amount}</div>
      <div >{props.description}</div>
      <div >{props.category}</div>
      <div >
        <button onClick={props.onEdit}>
          Edit
        </button>
        <button
          onClick={() => expCntxt.removeExpense(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ETList