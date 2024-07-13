import React, { useState } from "react";
import { HiOutlineMinus, HiPlus } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "../../redux/actions/cart";

const CartSingle = ({ data, quantityChangeHandler, removeFromCartHandler }) => {
  const [value, setValue] = useState(data.qty);
  const totalPrice = data.discountPrice * value;
  const dispatch = useDispatch();

  const increment = () => {
    if (data.stock < value + 1) {
      toast.error("Product stock limited!");
    } else {
      setValue(value + 1);
      const updatedItem = { ...data, qty: value + 1 };
      quantityChangeHandler(updatedItem);
    }
  };

  const decrement = () => {
    if (value === 1) {
      toast.error("Quantity can't be less than 1!");
    } else {
      setValue(value - 1);
      const updatedItem = { ...data, qty: value - 1 };
      quantityChangeHandler(updatedItem);
    }
  };

  return (
    <div className="border-b p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-[30px] h-[30px] bg-[#e44343] border-[#e4434373] rounded-full flex items-center justify-center cursor-pointer" onClick={increment}>
            <HiPlus size={18} color="#fff" />
          </div>
          <span className="px-[10px]">{value}</span>
          <div className="w-[30px] h-[30px] bg-[#a7abb14f] border-[#e4434373] rounded-full flex items-center justify-center cursor-pointer" onClick={decrement}>
            <HiOutlineMinus size={16} color="#7d879c" />
          </div>
          <div className="ml-2">
            <img src={data.imageUrl} alt="" className="w-[130px] h-min rounded-[5px]" />
          </div>
          <div className="ml-2">
            <h1>{data.name}</h1>
            <h4 className="text-[15px] font-[400] text-[#00000082]">
              ₹{data.discountPrice} * {value}
            </h4>
            <h4 className="text-[17px] font-[600] text-[#d02222] font-Roboto">
              ₹{totalPrice}
            </h4>
          </div>
        </div>
        <div>
          <RxCross1
            size={20}
            className="cursor-pointer"
            onClick={() => removeFromCartHandler(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartSingle;
