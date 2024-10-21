import React from "react";
import styles from "./ExpenseList.module.css";

export default function ExpenseList({ transactions }) {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.text} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
