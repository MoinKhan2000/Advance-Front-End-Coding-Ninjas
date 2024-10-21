import React, { useEffect, useState, useRef } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense, updateExpense, editingExpense, setEditingExpense }) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  useEffect(() => {
    if (editingExpense) {
      expenseTextInput.current.value = editingExpense.text;
      expenseAmountInput.current.value = editingExpense.amount;
    } else {
      clearInput();
    }
  }, [editingExpense]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = expenseAmountInput.current.value;
    if (parseInt(expenseAmount) === 0) {
      return;
    }

    const expense = {
      text: expenseText,
      amount: expenseAmount,
      id: editingExpense ? editingExpense.id : new Date().getTime(),
    };

    if (editingExpense) {
      updateExpense(expense);
    } else {
      addExpense(expense);
    }

    clearInput();
    return;
  };

  const clearInput = () => {
    expenseAmountInput.current.value = "";
    expenseTextInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>{editingExpense ? "Edit Transaction" : "Add New Transaction"}</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {editingExpense ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
};

export default ExpenseForm;