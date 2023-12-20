import React from "react";
import { useRef,useContext,useState} from "react";
import ETList from "./ETList";
import ExpenseContext from "../../Store/ExpenseContext";
import axios from "axios";
const ETForm=(props)=>{

    const amountInputRef=useRef();
    const descriptionInputRef = useRef();
    const categoryInputRef = useRef();
    const expCntxt = useContext(ExpenseContext);
    console.log(props)
    const [isEditMode, setIsEditMode] = useState(false);
    const [id, setId] = useState("");
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

      //   axios
      // .post(
      //   "https://expensetrackerproject-8b493-default-rtdb.firebaseio.com/expenses.json",
      //   expense
      // )
      if (!isEditMode)
      axios.post(
        "https://expensetrackerproject-8b493-default-rtdb.firebaseio.com/expenses.json",
        expense);
      // .then((res) => {
      //   console.log(res);
      //   axios
      //     .get(
      //       "https://expensetrackerproject-8b493-default-rtdb.firebaseio.com/expenses.json"
      //     )
      //     .then((res) => {
      //       let datas = res.data;
      //       for (let id in datas) {
      //         let expenses = datas[id];
      //         expenses.id = id;
      //         console.log(expenses);
      //         expCntxt.addExpense(expenses);
      //       }
      //     });
      // });

      else if (isEditMode)
      axios
        .put(
          `https://expensetrackerproject-8b493-default-rtdb.firebaseio.com/expenses/${id}.json`,
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
    setIsEditMode(false);
    };
    const editHandler = (expElement) => {
      amountInputRef.current.value = expElement.amount;
      descriptionInputRef.current.value = expElement.description;
      categoryInputRef.current.value = expElement.category;
      setIsEditMode(true);
      setId(expElement.id);
    };
    const expenses=expCntxt.expenses.map((expElement)=>(
        <ETList
        amount={expElement.amount}
        description={expElement.description}
        category={expElement.category}
        id={expElement.id}
        onEdit={() => {
        editHandler(expElement);
      }}
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
                        <button type="submit"> {isEditMode ? "Update" : "Add Expense"}</button>
                    </div>
                </div>
            </form>
        </div>
        <ul>{expenses}</ul>
        </>
    )
}

export default ETForm;