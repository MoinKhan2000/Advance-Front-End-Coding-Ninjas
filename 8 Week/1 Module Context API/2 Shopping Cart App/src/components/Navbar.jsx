import React, { useContext } from "react";
import styles from "../styles/Total.module.css";
import itemContext from "../context/itemContext";


function Navbar() {
  const { total, setTotal, item, setItem } = useContext(itemContext)
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
    </div>
  );
}

export default Navbar;
