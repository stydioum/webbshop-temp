import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ShoppingCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ol>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-details">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />

                <span>
                  {item.title} -{" "}
                  <span className="quantity-red">{item.price} kr</span> x
                  <span className="quantity-red"> {item.quantity}</span>
                </span>
              </div>

              <div className="button-container">
                <button
                  className="product-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="product-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <button
                  className="product-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default ShoppingCart;
