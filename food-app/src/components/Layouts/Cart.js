import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import CartSingle from "./CartSingle";
import styles from "../../styles/styles";

const Cart = ({ setOpenCart }) => {
  const  cart  = useSelector((state) => state.cart);
  const dispatch = useDispatch();
console.log("vvvv"+cart);
  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  const quantityChangeHandler = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
        <div className="flex w-full justify-end pt-5 pr-5">
          <RxCross1
            size={25}
            className="cursor-pointer"
            onClick={() => setOpenCart(false)}
          />
        </div>

        {cart && cart.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <h5>Cart Items is empty!</h5>
          </div>
        ) : (
          <>
            <div className={`${styles.noramlFlex} p-4`}>
              <IoBagHandleOutline size={25} />
              <h5 className="pl-2 text-[20px] font-[500]">
                {cart && cart.length} items
              </h5>
            </div>

            <br />

            <div className="w-full border-t">
              {cart &&
                cart.map((item, index) => (
                  <CartSingle
                    key={index}
                    data={item}
                    quantityChangeHandler={quantityChangeHandler}
                    removeFromCartHandler={removeFromCartHandler}
                  />
                ))}
            </div>
            <div className="px-5 mb-3">
              <Link to="/buynow">
                <div className={`h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]`}>
                  <h1 className="text-[#fff] text-[18px] font-[600]">
                    Buy Now (INR₹{totalPrice})
                  </h1>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
