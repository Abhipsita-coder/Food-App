import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cart";
import axios from "axios";
import styles from "../styles/styles";
// import { server } from "../server";
// import { useLocation } from 'react-router-dom';

const BuyNowPage = () => {
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  const cart = storedCart.map(item => ({
    name: item.name,
    quantity: item.qty,
    totalPrice: item.discount_price * item.qty,
  }));
  // console.log("cartttttttttttt",cart);
// console.log("ttttttttttttttt",storedCart);
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const user = useSelector((state) => state.user);
// console.log(user);
  const [quantity] = useState(1);
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    mobileNumber: "",
    alternateMobileNumber: "",
    email: "",
    address: "",
    state: "",
    district: "",
    pinCode: "",
    acceptTerms: false,
  });

  const handleAddToCart = () => {
    const newItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      quantity: quantity,
    };

    dispatch(addToCart(newItem));
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    const orderData = {
      user: {
        fullName: shippingDetails.fullName,
        mobileNumber: shippingDetails.mobileNumber,
        alternateMobileNumber: shippingDetails.alternateMobileNumber,
        email: shippingDetails.email,
        address: shippingDetails.address,
        state: shippingDetails.state,
        district: shippingDetails.district,
        pinCode: shippingDetails.pinCode,
        acceptTerms: shippingDetails.acceptTerms,
      },
       cart : cart || [],
    };

    try {
      // Send orderData to the backend using Axios
      const response = await axios.post(`${server}/order`, orderData);

      // Handle successful response
      console.log("Order submitted successfully:", response.data);

      // Optionally, you can clear the cart or redirect the user to a success page
      // dispatch(clearCart()); // Assuming you have an action to clear the cart
      // history.push("/success-page"); // Assuming you are using React Router
    } catch (error) {
      // Handle error if order submission fails
      console.error("Error submitting order:", error);
    }
  };

  return (
    <div className={`py-4 ${styles.section}`}>
      <form onSubmit={handleSubmitOrder}>
        {/* User details */}
        <div className="mb-4">
  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 text-center">
    Full Name:
  </label>
  <input
  type="text"
  id="fullName"
  value={shippingDetails.fullName}
  onChange={(e) => setShippingDetails({ ...shippingDetails, fullName: e.target.value })}
  className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 text-gray-800"
  placeholder="Full Name"
/>

</div>


        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 text-center">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            value={shippingDetails.mobileNumber}
            onChange={(e) => setShippingDetails({ ...shippingDetails, mobileNumber: e.target.value })}
            className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 text-gray-800"
  placeholder="Mobile Number"
         
          />
        </div>

        <div className="mb-4">
          <label htmlFor="alternateMobileNumber" className="block text-sm font-medium text-gray-700 text-center">Alternate Mobile Number:</label>
          <input
            type="tel"
            id="alternateMobileNumber"
            value={shippingDetails.alternateMobileNumber}
            onChange={(e) =>
              setShippingDetails({ ...shippingDetails, alternateMobileNumber: e.target.value })
            }
            className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 text-gray-800"
  placeholder="Alternate Mobile Number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-center">Email:</label>
          <input
            type="email"
            id="email"
            value={shippingDetails.email}
            onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
            className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 text-gray-800"
  placeholder="Email"


          />
        </div>

        {/* Shipping address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 text-center">Address:</label>
          <input
            type="text"
            id="address"
            value={shippingDetails.address}
            onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
          
            className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 text-gray-800"
  placeholder="Address"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 text-center">State:</label>
          <input
            type="text"
            id="state"
            value={shippingDetails.state}
            onChange={(e) => setShippingDetails({ ...shippingDetails, state: e.target.value })}
          
            className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 text-gray-800"
  placeholder="State"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="district" className="block text-sm font-medium text-gray-700 text-center">District:</label>
          <input
            type="text"
            id="district"
            value={shippingDetails.district}
            onChange={(e) => setShippingDetails({ ...shippingDetails, district: e.target.value })}
            className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 text-gray-800"
  placeholder="District"  />
        </div>

        <div className="mb-4">
          <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700 text-center">Pin Code:</label>
          <input
            type="text"
            id="pinCode"
            value={shippingDetails.pinCode}
            onChange={(e) => setShippingDetails({ ...shippingDetails, pinCode: e.target.value })}
            className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 text-gray-800"
  placeholder="PinCode"
          />
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            id="acceptTerms"
            checked={shippingDetails.acceptTerms}
            onChange={(e) => setShippingDetails({ ...shippingDetails, acceptTerms: e.target.checked })}
            // className="mt-1 p-3 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300 placeholder-gray-400 text-gray-800"
         
          />
          <label htmlFor="acceptTerms">I accept the terms and conditions</label>
        </div>

        {/* Cart items summary */}
        <ul>
          {user?.cart?.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Price: {item.price * item.quantity}
            </li>
          ))}
        </ul>

        {/* Submit Order button */}
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-200"
          >
            Place Order Now
          </button>
      </form>
    </div>
  );
};

export default BuyNowPage;