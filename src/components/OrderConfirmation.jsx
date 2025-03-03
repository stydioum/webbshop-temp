import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const OrderConfirmation = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="order-confirmation">
      <h1>Order</h1>
      {orderPlaced ? (
        <p>
          Thank you for your purchase! Your order has been placed successfully.
        </p>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            <>
              <ol>
                {cartItems.map((item) => (
                  <li key={item.id} className="order-item">
                    <div className="order-item-details">
                      {}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="order-item-image"
                      />
                      <span>{item.title} - </span>
                      <span className="quantity-red">{item.price} kr</span> x
                      <span className="quantity-red"> {item.quantity}</span> ={" "}
                      <span className="quantity-red">
                        {item.price * item.quantity} kr
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
              <p>
                <strong>Total: {totalAmount} kr</strong>
              </p>
              <div className="button-container">
                <button className="product-btn" onClick={handleOrder}>
                  Place Order
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default OrderConfirmation;
