import React from 'react';
import styles from '../styles/CartModal.module.css';
import { useItemContext } from '../context/itemContext';

const CartModal = () => {
  const { showCart, toggleCartModal, handleReset, cart, total } = useItemContext();

  if (!showCart) return null; // Do not render if cart is not shown

  return (
    <div className={styles.overlay} onClick={toggleCartModal}>
      <div className={styles.cartModal} onClick={(e) => e.stopPropagation()}>
        {/* Header section with Close and Clear buttons */}
        <div className={styles.header}>
          <button className={styles.clearButton} onClick={handleReset}>Clear Cart</button>
          <button className={styles.closeButton} onClick={toggleCartModal}>Close</button>
        </div>

        {/* Items container */}
        <div className={styles.itemContainer}>
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemDetails}>
                  <h4 className={styles.itemName}>{item.name}</h4>
                  <div className={styles.itemCalculation}>
                    <span className={styles.itemQuantity}>{item.quantity} x </span>
                    <span className={styles.itemPrice}>₹ {item.price}</span>
                  </div>
                </div>
                <div className={styles.itemTotal}>
                  ₹ {(item.quantity * item.price).toFixed(2)}
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyCart}>Your cart is empty</div>
          )}
        </div>

        {/* Total Price section */}
        <div className={styles.total}>
          <span>Total:</span>
          <span className={styles.totalPrice}>₹ {total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
