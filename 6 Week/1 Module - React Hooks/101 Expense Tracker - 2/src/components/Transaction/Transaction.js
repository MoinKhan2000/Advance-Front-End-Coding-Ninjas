import React, { useState } from "react";
import styles from "./Transaction.module.css";
import EditImage from "../../images/edit.png";
import DeleteImage from "../../images/trash-bin.png";

const Transaction = ({ expense, index, deleteExpense }) => {
  const [currentHoverIndex, setCurrentHoverIndex] = useState(null);

  // Function to handle delete click
  const handleDelete = () => {
    deleteExpense(expense.id);
  };

  return (
    <li
      className={`${styles.transaction} ${expense.amount > 0 ? styles.profit : styles.loss}`}
      onMouseOver={() => setCurrentHoverIndex(index)}
      onMouseLeave={() => setCurrentHoverIndex(null)}
    >
      <div>{expense.text}</div>
      <div className={styles.transactionOptions}>
        <div className={`${styles.amount} ${currentHoverIndex === index && styles.movePrice}`}>
          ${expense.amount.toFixed(2)} {/* Ensure consistent number formatting */}
        </div>
        <div className={`${styles.btnContainer} ${currentHoverIndex === index && styles.active}`}>
          <div className={styles.edit} onClick={() => { /* Edit functionality */ }}>
            <img src={EditImage} height="100%" alt="Edit" />
          </div>
          <div className={styles.delete} onClick={handleDelete}> {/* Trigger delete on click */}
            <img src={DeleteImage} height="100%" alt="Delete" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Transaction;
