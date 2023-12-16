import React from "react";
import { useRef,useContext } from "react";
import ETList from "./ETList";
import ExpenseContext from "../../Store/ExpenseContext";
import axios from "axios";
const ETForm=(props)=>{

    const amountInputRef=useRef();
    const descriptionInputRef = useRef();
    const categoryInputRef = useRef();
    const expCntxt = useContext(ExpenseContext);
    console.log(props)
    const submitHandler=(e)=>{
        e.preventDefault();
        const amount = amountInputRef.current.value;
        const description = descriptionInputRef.current.value;
        const category = categoryInputRef.current.value;

        const expense = {
            amount: amount,
            description: description,
            category: category,
          };
        //   expCntxt.addExpense(expense);

        axios
      .post(
        "https://expensetrackerproject-8b493-default-rtdb.firebaseio.com/expenses.json",
        expense
      )
      .then((res) => {
        console.log(res);
        axios
          .get(
            "https://expensetrackerproject-8b493-default-rtdb.firebaseio.com/expenses.json"
          )
          .then((res) => {
            let datas = res.data;
            for (let id in datas) {
              let expenses = datas[id];
              expenses.id = id;
              console.log(expenses);
              expCntxt.addExpense(expenses);
            }
          });
      });
    }
    const expenses=expCntxt.expenses.map((exp)=>(
        <ETList
        amount={exp.amount}
        description={exp.description}
        category={exp.category}
        />
    ));


    return(
        <>
        
        <div>
            <h1> Your Expenses...  </h1>
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <label> Amount</label>
                        <input type="text" ref={amountInputRef}></input>
                    </div>
                    <div>
                        <label> Description</label>
                        <input type="text" ref={descriptionInputRef}/>
                    </div>
                    <div>
                        <label> Category</label>
                        <select ref={categoryInputRef}>
                        <option value="food">food</option>
                        <option value="petrol">petrol</option>
                        <option value="salary">salary</option>
                        <option value="home appliance">home appliance</option>
                        <option value="education">education</option>
                        <option value="food">movies</option>
                        <option value="food">others....</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Add Expense</button>
                    </div>
                </div>
            </form>
        </div>
        <ul>{expenses}</ul>
        </>
    )
}

export default ETForm;