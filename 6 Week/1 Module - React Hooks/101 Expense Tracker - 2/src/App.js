import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // Function to update balance, income, and expenses totals
  const updateFinancials = (updatedExpenses) => {
    const totalBalance = updatedExpenses.reduce((acc, item) => acc + item.amount, 0);
    const totalIncome = updatedExpenses
      .filter((item) => item.amount > 0)
      .reduce((acc, item) => acc + item.amount, 0);
    const totalExpense = updatedExpenses
      .filter((item) => item.amount < 0)
      .reduce((acc, item) => acc + item.amount, 0);

    setBalance(totalBalance);
    setIncome(totalIncome);
    setExpense(totalExpense);
  };

  // Add a new expense
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, newExpense];
      updateFinancials(updatedExpenses);
      return updatedExpenses;
    });
  };

  // Delete an expense by ID and rerender the component
  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter((expense) => expense.id !== id);
      updateFinancials(updatedExpenses);
      return updatedExpenses;
    });
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense={addExpense} />
        <div className="expenseContainer">
          <ExpenseInfo balance={balance} income={income} expense={Math.abs(expense)} />
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
