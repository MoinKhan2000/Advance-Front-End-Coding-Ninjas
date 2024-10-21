import React, { useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

// Reducer function
const expenseReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      const updatedExpenses = [...state.expenses, action.payload];
      return {
        ...state,
        expenses: updatedExpenses,
        balance: calculateBalance(updatedExpenses),
        income: calculateIncome(updatedExpenses),
        expense: calculateExpense(updatedExpenses)
      };

    case 'DELETE_EXPENSE':
      console.log("Expenses before delete:", state.expenses);
      const filteredExpenses = state.expenses.filter(expense => expense.id !== action.payload);
      console.log("Expenses after delete:", filteredExpenses);
      return {
        ...state,
        expenses: filteredExpenses,
        balance: calculateBalance(filteredExpenses),
        income: calculateIncome(filteredExpenses),
        expense: calculateExpense(filteredExpenses)
      };

    default:
      return state;
  }
};

// Helper functions to calculate financials
const calculateBalance = (expenses) => expenses.reduce((acc, item) => acc + item.amount, 0);
const calculateIncome = (expenses) => expenses.filter(item => item.amount > 0).reduce((acc, item) => acc + item.amount, 0);
const calculateExpense = (expenses) => expenses.filter(item => item.amount < 0).reduce((acc, item) => acc + item.amount, 0);

function App() {
  const initialState = {
    expenses: [],
    balance: 0,
    income: 0,
    expense: 0
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  // Add a new expense
  const addExpense = (newExpense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: newExpense });
  };

  // Delete an expense
  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE_EXPENSE', payload: id });
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList expenses={state.expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
