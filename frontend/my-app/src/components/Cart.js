import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold">Your Cart</h2>
      <ul className="mt-4">
        {cartItems.map(item => (
          <li key={item.id} className="border p-2 mb-2">
            <h4 className="font-bold">{item.product.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${item.product.price * item.quantity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
