import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title},{item.weight1}{item.weight2} , ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
