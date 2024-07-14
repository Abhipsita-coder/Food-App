import React, { useState } from "react";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import "./CartSingle.css"; // Import the CSS file

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.price * value;

  const increment = (data) => {
    if (data.stock < value) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updateCartData = { ...data, qty: value + 1 };
      quantityChangeHandler(updateCartData);
    }
  };

  const decrement = (data) => {
    setValue(value === 1 ? 1 : value - 1);
    const updateCartData = { ...data, qty: value === 1 ? 1 : value - 1 };
    quantityChangeHandler(updateCartData);
  };

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <div className="flex w-full justify-end pt-5 pr-5">
          <RxCross1
            size={20}
            className="cursor-pointer"
            onClick={() => removeFromCartHandler(data)}
          />
        </div>

        <div>
          <div
            className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] justify-center cursor-pointer`}
            onClick={() => increment(data)}
          >
            <HiPlus size={32} color="#fff" />
          </div>
          <span className="pl-[10px]">{data.qty}</span>
          <div
            className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer"
            onClick={() => decrement(data)}
          >
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
        </div>
        
        {data.image ? (
          <img
            src={data.image}
            alt={data.title}
            className="small-image"
          />
        ) : (
          <div className="small-image">
            <span>No Image</span>
          </div>
        )}
        
        <div className="pl-[5px]">
          <h1>{data.title}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ₹{data.price} * {value}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CartSingle;
