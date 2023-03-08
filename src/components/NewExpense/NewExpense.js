import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
   const [isAdding, setIsAdding] = useState(false);
   //this is to pass expenseData from ExpenseForm to here. After, we pass to App.
   const onSaveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString(),
      };
      console.log(expenseData);
      //↓　lifting the state up
      props.onAddExpense(expenseData);
      setIsAdding(false);
   };

   //the following is for isAdding state management.
   const newExpenseHandler = () => {
      setIsAdding(true);
   };

   const stopAddingHandler = () => {
      setIsAdding(false);
   };

   return (
      <div className="new-expense">
         {!isAdding && (
            <button onClick={newExpenseHandler}>Add New Expense</button>
         )}

         {isAdding && (
            <ExpenseForm
               onSaveExpenseData={onSaveExpenseDataHandler}
               onCancel={stopAddingHandler}
            />
         )}
      </div>
   );
};

export default NewExpense;
