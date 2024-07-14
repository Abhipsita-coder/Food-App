import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cart";
import axios from "axios";
import { server}  from "../../server";
import "../../styles/buy.css";
import Layout from "../../components/Layouts/Layout";
import { toast } from "react-toastify";

const BuyNowPage = () => {
  const storedCart = JSON.parse(localStorage.getItem('cart'));
  const cart = storedCart.map(item => ({
    name: item.name,
    quantity: item.qty,
    totalPrice: item.discount_price * item.qty,
  }));

  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct);
  const user = useSelector((state) => state.user);
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
      const response = await axios.post(`${server}/order`, orderData);
       toast.success("Order Placed Successfully");
      console.log("Order submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <>
      <Layout>
    <div className="py-4">
      <form onSubmit={handleSubmitOrder}>
        <div className="mb-4">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={shippingDetails.fullName}
            onChange={(e) => setShippingDetails({ ...shippingDetails, fullName: e.target.value })}
            placeholder="Full Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            value={shippingDetails.mobileNumber}
            onChange={(e) => setShippingDetails({ ...shippingDetails, mobileNumber: e.target.value })}
            placeholder="Mobile Number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="alternateMobileNumber">Alternate Mobile Number:</label>
          <input
            type="tel"
            id="alternateMobileNumber"
            value={shippingDetails.alternateMobileNumber}
            onChange={(e) => setShippingDetails({ ...shippingDetails, alternateMobileNumber: e.target.value })}
            placeholder="Alternate Mobile Number"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={shippingDetails.email}
            onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={shippingDetails.address}
            onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
            placeholder="Address"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            value={shippingDetails.state}
            onChange={(e) => setShippingDetails({ ...shippingDetails, state: e.target.value })}
            placeholder="State"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="district">District:</label>
          <input
            type="text"
            id="district"
            value={shippingDetails.district}
            onChange={(e) => setShippingDetails({ ...shippingDetails, district: e.target.value })}
            placeholder="District"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pinCode">Pin Code:</label>
          <input
            type="text"
            id="pinCode"
            value={shippingDetails.pinCode}
            onChange={(e) => setShippingDetails({ ...shippingDetails, pinCode: e.target.value })}
            placeholder="Pin Code"
          />
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            id="acceptTerms"
            checked={shippingDetails.acceptTerms}
            onChange={(e) => setShippingDetails({ ...shippingDetails, acceptTerms: e.target.checked })}
          />
          <label htmlFor="acceptTerms">I accept the terms and conditions</label>
        </div>

        <ul>
          {user?.cart?.map((item) => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity} - Price: {item.price * item.quantity}
            </li>
          ))}
        </ul>

        <button type="submit">
          Place Order Now
        </button>
      </form>
    </div>
  </Layout>
  </> );
};

export default BuyNowPage;
