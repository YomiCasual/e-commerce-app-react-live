import React, { useContext, Fragment } from "react";
import { PhoneContext } from "../context/context";
import CartItem from "./CartItem";
import CartDetails from "./CartDetails";

const CartItems = ({ history }) => {
  const state = useContext(PhoneContext);

  const {
    cart,
    increaseItem,
    decreaseItem,
    deleteItem,
    clearCart,
    onPaymentSuccess,
    onPaymentError
  } = state;
  return (
    <Fragment>
      {cart.length === 0 && (
        <h3 className="text-center mt-4 text-danger">Your Cart is Empty</h3>
      )}
      {cart.length !== 0 && (
        <div>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              increaseItem={increaseItem}
              decreaseItem={decreaseItem}
              deleteItem={deleteItem}
            />
          ))}
          <CartDetails
            cart={cart}
            clearCart={clearCart}
            history={history}
            onPaymentSuccess={onPaymentSuccess}
            onPaymentError={onPaymentError}
          />
        </div>
      )}
    </Fragment>
  );
};

export default CartItems;
