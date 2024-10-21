import { useState, useReducer, useEffect } from "react";
import "./App.css";

// components imports
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import firebase methods here
import { doc, collection, addDoc, setDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseInit";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_EXPENSES": {
      return {
        expenses: payload.expenses
      };
    }
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    case "UPDATE_EXPENSE": {
      const expensesDuplicate = state.expenses;
      expensesDuplicate[payload.expensePos] = payload.expense;
      return {
        expenses: expensesDuplicate
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [expenseToUpdate, setExpenseToUpdate] = useState(null);

  const getData = async () => {
    const snapshot = await getDocs(collection(db, "expenses"));
    const expenses = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));

    dispatch({ type: "GET_EXPENSES", payload: { expenses } });
    toast.success("Expenses retrived successfully.");
  };

  useEffect(() => {
    getData();
  }, []);

  const addExpense = async (expense) => {
    const expenseRef = collection(db, "expenses");
    const docRef = await addDoc(expenseRef, expense);

    dispatch({
      type: "ADD_EXPENSE",
      payload: { expense: { id: docRef.id, ...expense } }
    });
    toast.success("Expense added successfully.");
  };

  const deleteExpense = async (id) => {
    // delete expense from firestore here
    const expenseRef = doc(db, "expenses", id);
    const docRef = await deleteDoc(expenseRef);
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
    toast.success("Expense deleted successfully.");
  };

  const resetExpenseToUpdate = () => {
    setExpenseToUpdate(null);
  };


  const updateExpense = async (expense) => {
    try {
      // Find the index of the expense in the state
      const expensePos = state.expenses
        .map(function (exp) {
          return exp.id;
        })
        .indexOf(expense.id);

      // If the expense doesn't exist in the state, return false
      if (expensePos === -1) {
        return false;
      }
      console.log(expense.id);

      // Get the reference to the specific document in Firestore
      const expenseRef = doc(db, "expenses", expense.id);
      // console.log(expenseRef);

      // Update the document with the new expense data
      const res = await updateDoc(expenseRef, {
        ...expense,
      });
      console.log(res.data);


      // Update the local state with the new expense data
      dispatch({ type: "UPDATE_EXPENSE", payload: { expensePos, expense } });

      // Show success toast message
      toast.success("Expense updated successfully.");
    } catch (error) {
      console.error("Error updating expense:", error);
      toast.error("Failed to update expense.");
    }
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
