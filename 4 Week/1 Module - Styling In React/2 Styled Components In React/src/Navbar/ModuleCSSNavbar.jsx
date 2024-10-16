import React from 'react';
import styles from './ModuleCSSNavbar.module.css'; // Importing the CSS module

const ModuleCSSNavbar = () => {
  console.log(styles);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        MovieApp
      </div>

      <div className={styles.cartContainer}>
        <img
          src="https://cdn-icons-png.freepik.com/512/1413/1413908.png"
          alt="shopping cart"
          className={styles.cartIcon}
        />
        <span className={styles.cartNum}>3</span>
      </div>
    </nav>
  );
}

export default ModuleCSSNavbar;
