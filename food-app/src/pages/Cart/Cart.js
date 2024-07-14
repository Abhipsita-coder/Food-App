import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cart";
import CartSingle from "../../components/Layouts/CartSingle";
import Layout from "../../components/Layouts/Layout";
import "../../styles/cart.css"
import { toast } from "react-toastify";
const Cart = ({ setOpenCart }) => {
  const cart = useSelector((state) => state.cart.cart) || [];
  const dispatch = useDispatch();

  const removeFromCartHandler = (data) => {
    dispatch(removeFromCart(data));
    toast.success("Removed From Cart");
  };

  const quantityChangeHandler = (data) => {
    dispatch(addToCart(data));
    toast.success("Added to Cart");
  };

  const totalPrice = cart.reduce((acc, item) => {
    const itemQty = Number(item.qty) || 1;
    const itemPrice = Number(item.price) || 0;
    return acc + itemQty * itemPrice;
  }, 0);

  return (
    <Layout>
      <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
        <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
          {cart.length === 0 ? (
            <div className="w-full h-screen flex items-center justify-center">
              <h5>Cart Items is empty!</h5>
            </div>
          ) : (
            <>
              <div className="flex items-center p-4">
                <IoBagHandleOutline size={25} className="text-gray-700" />
                <h5 className="pl-2 text-xl font-semibold text-gray-800">
                  {cart.length} items
                </h5>
              </div>

              <div className="w-full border-t">
                {cart.map((item, index) => (
                  <CartSingle
                    key={index}
                    data={item}
                    quantityChangeHandler={quantityChangeHandler}
                    removeFromCartHandler={removeFromCartHandler}
                  />
                ))}
              </div>
              <div className="px-5 mb-3">
                <Link
                  to="/buynow"
                  className="buy-now-button"
                >
                  Buy Now (INR₹{totalPrice.toFixed(2)})
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
