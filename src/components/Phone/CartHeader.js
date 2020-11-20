import React, { useContext } from "react";
import { PhoneContext } from "../context/context";
const CartHeader = () => {
  let context = useContext(PhoneContext);

  if (context.cart.length > 0) {
    return (
      <div className="cart-header">
        <h5>product</h5>
        <h5>name of product</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>remove</h5>
        <h5>total</h5>
      </div>
    );
  }

  return null;
};

export default CartHeader;
