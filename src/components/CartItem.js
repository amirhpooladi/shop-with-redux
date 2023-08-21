import React from "react";
import "./Cart.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const increamentCartItems = () => {
    dispatch(cartActions.addToCart({ name, id, price }));
  };

  const decreamentCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  console.log(total);
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decreamentCartItems}>
        -
      </button>
      <button className="cart-actions" onClick={increamentCartItems}>
        +
      </button>
    </div>
  );
};

export default CartItem;
