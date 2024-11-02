import React from "react";
import styles from "../styles/Total.module.css";
import { useItemContext } from "../context/itemContext";
import CartModal from "./CartModal";


function Navbar() {
  const { total, item, handleReset, showCart, toggleCartModal } = useItemContext()
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <button className={styles.reset} onClick={handleReset}>Reset</button>
      <button className={styles.reset} onClick={toggleCartModal}>Cart</button>
      {
        showCart && (
          <div className={styles.cartModal}>
            <CartModal />
          </div>
        )
      }
    </div>
  );
}

export default Navbar;
