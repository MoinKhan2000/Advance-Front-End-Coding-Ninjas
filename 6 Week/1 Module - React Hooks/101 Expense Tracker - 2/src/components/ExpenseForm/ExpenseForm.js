import { useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense }) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Get the text and amount values
    const text = expenseTextInput.current.value;
    const amount = parseFloat(expenseAmountInput.current.value);

    if (!text || isNaN(amount)) return; // Validation: Ensure text and valid number exist

    // Create a new transaction object
    const newExpense = {
      id: new Date().getTime(), // Use current time as the ID for uniqueness
      text: text,
      amount: amount, // Negative for expense, positive for income
    };

    addExpense(newExpense); // Pass the new expense to the parent component

    // Clear input fields after submitting
    expenseTextInput.current.value = "";
    expenseAmountInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        ref={expenseTextInput}
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        ref={expenseAmountInput}
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
