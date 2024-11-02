import React, { useContext } from "react";
import styles from "../styles/ItemCard.module.css";
import itemContext from "../context/itemContext";

function ItemCard({ name, price }) {
  const { total, setTotal, item, setItem } = useContext(itemContext)
  const handleAdd = () => {
    setTotal(total + price);
    setItem((prev) => {
      return prev += 1
    })
    console.log(item);
  };

  const handleRemove = () => {
    if (total <= 0) return;
    setTotal(total - price);
    setItem((prev) => {
      return prev -= 1
    })
    console.log(item);
  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
