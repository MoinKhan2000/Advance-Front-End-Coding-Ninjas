import { useState, useReducer, useEffect } from "react";
import "./App.css";

// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import firebase methods
import { doc, collection, addDoc, setDoc, getDocs, deleteDoc, query, limit } from "firebase/firestore";
import { db } from "./firebaseInit";

// Reducer function
const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    // Set expenses from Firestore
    case "SET_EXPENSES": {
      return {
        ...state,
        expenses: payload.expenses
      };
    }
    // Add new expense
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    // Remove an expense
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    // Update an expense
    case "UPDATE_EXPENSE": {
      const updatedExpenses = [...state.expenses];
      updatedExpenses[payload.expensePos] = payload.expense;
      return {
        expenses: updatedExpenses
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  // Fetch expenses from Firestore
  const getAllTheDocs = async () => {
    try {
      const q = query(collection(db, 'expenses'), limit(10));
      const snapshot = await getDocs(q);
      const expenses = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch({ type: "SET_EXPENSES", payload: { expenses } });
    } catch (error) {
      console.error("Error fetching expenses: ", error);
    }
  };

  useEffect(() => {
    getAllTheDocs();
  }, []);

  // Add a new expense to Firestore and update state
  const addExpense = async (expense) => {
    try {
      const expenseRef = collection(db, "expenses");
      const docRef = await addDoc(expenseRef, expense);

      dispatch({
        type: "ADD_EXPENSE",
        payload: { expense: { id: docRef.id, ...expense } }
      });
      toast.success("Expense added successfully.");
    } catch (error) {
      toast.error("Failed to add expense.");
    }
  };

  // Update an existing expense in Firestore and update state
  const updateExpense = async (expense) => {
    const expensePos = state.expenses
      .map((exp) => exp.id)
      .indexOf(expense.id);

    if (expensePos === -1) {
      return;
    }

    try {
      const expenseRef = doc(db, "expenses", expense.id);
      await setDoc(expenseRef, expense);

      dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });
      toast.success("Expense updated successfully.");
    } catch (error) {
      toast.error("Failed to update expense.");
    }
  };

  // Delete an expense from Firestore and update state
  const deleteExpense = async (id) => {
    try {
      await deleteDoc(doc(db, "expenses", id));
      dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
      toast.success("Expense deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete expense.");
    }
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
