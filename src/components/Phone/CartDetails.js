import React from "react";
import PaypalBtn from "../PaypalBtn/PaypalBtn";
const CartDetails = ({
  cart,
  clearCart,
  history,
  onPaymentSuccess,
  onPaymentError
}) => {
  let subTotal = cart.reduce((acc, curr) => {
    return (acc += curr.total);
  }, 0);
  let tax = 0.1 * subTotal;
  let total = subTotal + tax;

  return (
    <div className="cart-details">
      <button className="btn btn-warning" onClick={clearCart}>
        clear cart
      </button>
      <h5>Subtotal : ${subTotal}</h5>
      <h5>Tax : ${tax.toFixed(2)}</h5>
      <h5>Total : ${total.toFixed(2)}</h5>
      <PaypalBtn
        total={total}
        clearCart={clearCart}
        history={history}
        onPaymentSuccess={onPaymentSuccess}
        onPaymentError={onPaymentError}
      />
    </div>
  );
};

export default CartDetails;
