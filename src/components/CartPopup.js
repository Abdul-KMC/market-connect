import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CartPopup() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('https://655e14659f1e1093c59a7c39.mockapi.io/shelf/cart')
      .then(response => setCartItems(response.data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  return (
    <div className="cart-popup">
      <h3>Shopping Cart</h3>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartPopup;
