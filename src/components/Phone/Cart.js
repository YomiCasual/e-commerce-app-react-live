import React from "react";
import CartHeader from "./CartHeader";
import CartItems from "./CartItems";

const Cart = props => {
  let history = props.history;
  return (
    <div className="cart-container">
      <h3 className="text-center mb-4">Your Cart</h3>
      <CartHeader />
      <CartItems history={history} />
    </div>
  );
};

export default Cart;
