import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQty, total, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <div className="page cart"><h2>Your cart is empty</h2></div>;
  }

  return (
    <div className="page cart">
      <h2>Your Cart</h2>
      <div className="cart-list">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="info">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className="qty-controls">
                <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
              </div>
            </div>
            <button className="remove" onClick={() => removeFromCart(item.id)}>×</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p>Total: <strong>${total.toFixed(2)}</strong></p>
        <button onClick={clearCart}>Clear Cart</button>
        {/* هنا ممكن تضيف زر Proceed to Checkout */}
      </div>
    </div>
  );
};

export default Cart;
