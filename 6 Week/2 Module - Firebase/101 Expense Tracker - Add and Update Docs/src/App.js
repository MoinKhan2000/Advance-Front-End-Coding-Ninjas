import { useState, useReducer } from "react";
import "./App.css";

// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import db from "./firebaseInit";

// Import Firestore methods
import { collection, addDoc, doc, setDoc } from "firebase/firestore";

// Reducer function to manage expenses state
const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses],
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id),
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate,
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  // Function to add expense to Firestore
  const addExpense = async (expense) => {
    try {
      // Add expense to Firestore collection
      const docRef = await addDoc(collection(db, "expenses"), {
        text: expense.text,
        amount: expense.amount,
        createdAt: new Date(),
      });

      // Dispatch ADD_EXPENSE action with the new expense including the document ID
      dispatch({
        type: "ADD_EXPENSE",
        payload: { expense: { ...expense, id: docRef.id } },
      });

      toast.success("Expense added successfully.");
    } catch (error) {
      console.error("Error adding expense: ", error);
      toast.error("Failed to add expense.");
    }
  };

  // Function to update expense in Firestore
  const updateExpense = async (expense) => {
    const expensePos = state.expenses
      .map(function (exp) {
        return exp.id;
      })
      .indexOf(expense.id);

    if (expensePos === -1) {
      return false;
    }

    try {
      // Update expense document in Firestore
      const docRef = doc(db, "expenses", expense.id);
      await setDoc(docRef, {
        text: expense.text,
        amount: expense.amount,
        updatedAt: new Date(),
      });

      // Dispatch UPDATE_EXPENSE action to update the local state
      dispatch({
        type: "UPDATE_EXPENSE",
        payload: { expensePos, expense },
      });

      toast.success("Expense updated successfully.");
    } catch (error) {
      console.error("Error updating expense: ", error);
      toast.error("Failed to update expense.");
    }
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };

  return (
    <>
      <ToastContainer />
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm
          addExpense={addExpense}
          expenseToUpdate={expenseToUpdate}
          updateExpense={updateExpense}
          resetExpenseToUpdate={resetExpenseToUpdate}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            changeExpenseToUpdate={setExpenseToUpdate}
          />
        </div>
      </div>
    </>
  );
}

export default App;
