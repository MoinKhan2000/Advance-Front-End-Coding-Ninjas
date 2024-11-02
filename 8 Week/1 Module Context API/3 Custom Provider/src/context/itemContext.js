import { createContext, useContext, useState } from "react";
const itemContext = createContext()

function useItemContext() {
  const value = useContext(itemContext)
  return value
}

function CustomItemProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [cart, setcart] = useState([]);

  const handleAdd = (prod) => {
    const { id, name, price } = prod
    const index = cart.findIndex(p => p.id === id)
    if (index === -1) {
      setcart([...cart, { ...prod, quantity: 1 }])
      setTotal(total + price)
    } else {
      cart[index].quantity += 1;
      setcart(cart)
      setTotal(total + price)
      console.log(cart);
    }

    setItem((prev) => {
      return prev += 1
    })

  };

  const handleRemove = (prod) => {
    const { id, name, price } = prod
    let index = cart.findIndex(p => p.id === id)
    if (index === - 1) return
    if (cart[index].quantity === 1) {
      cart.splice(index, 1)
      setItem(item - 1)
      setcart(cart)
      setTotal(total - price)
    } else {
      cart[index].quantity -= 1;
      setcart(cart)
      setTotal(total - price)
      setItem(item - 1)
    }
  };

  const handleReset = () => {
    setItem(0)
    setTotal(0)
    setcart([])
  }

  const toggleCartModal = () => {
    setShowCart(!showCart)
  }

  return (
    <itemContext.Provider value={{ total, setTotal, showCart, toggleCartModal, handleAdd, handleRemove, item, setItem, handleReset, cart }}>
      {children}
    </itemContext.Provider>
  )
}
export default itemContext;
export { CustomItemProvider, useItemContext }