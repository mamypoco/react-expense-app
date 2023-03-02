import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
   //this is to pass expenseData from ExpenseForm to here. After, we pass to App.
   const onSaveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString(),
      };
      console.log(expenseData);
      props.onAddExpense(expenseData);
   };

   return (
      <div className="new-expense">
         <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      </div>
   );
};

export default NewExpense;
