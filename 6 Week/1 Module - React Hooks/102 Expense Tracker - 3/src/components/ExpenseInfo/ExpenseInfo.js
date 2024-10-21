import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = ({ expenses }) => {
  const profitAmount = expenses
    .filter(expense => expense.amount > 0)
    .reduce((acc, expense) => acc + expense.amount, 0);

  const lossAmount = expenses
    .filter(expense => expense.amount < 0)
    .reduce((acc, expense) => acc + expense.amount, 0);

  const grandTotal = profitAmount + lossAmount;

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${grandTotal.toFixed(2)}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p className={`${styles.money} ${styles.plus}`}>+${profitAmount}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className={`${styles.money} ${styles.minus}`}>-${Math.abs(lossAmount)}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
