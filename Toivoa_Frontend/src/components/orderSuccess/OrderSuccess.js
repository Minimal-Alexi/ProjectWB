import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="order-success-container">
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for your purchase. Your order has been placed successfully.</p>
      <button onClick={() => navigate("/")}>Return to Shop</button>
    </div>
  );
};

export default OrderSuccess;