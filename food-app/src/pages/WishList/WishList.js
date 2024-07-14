import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../../redux/actions/wishlist"; // Adjust according to your Redux actions
import Layout from "../../components/Layouts/Layout";
import { addToCart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist) || [];
  const dispatch = useDispatch();
 

  const removeFromWishlistHandler = (item) => {
    dispatch(removeFromWishList(item)); // Assuming removeFromWishlist accepts an item ID
    toast.success("Removed from WishList")
};

  const quantityChangeHandler = (data) => {
    dispatch(addToCart(data));
    toast.success("Added to Cart")
  };

  const totalPrice = wishlist.reduce((acc, item) => {
    const itemPrice = Number(item.price) || 0; // Assuming price property exists on wishlist item
    return acc + itemPrice;
  }, 0);

  return (
    <Layout>
      <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
        <div className="fixed top-0 right-0 h-full w-[80%] 800px:w-[25%] bg-white flex flex-col overflow-y-scroll justify-between shadow-sm">
          {wishlist.length === 0 ? (
            <div className="w-full h-screen flex items-center justify-center">
              <h5>Wishlist is empty!</h5>
            </div>
          ) : (
            <>
              <div className="flex items-center p-4">
                <IoHeartOutline size={25} className="text-gray-700" />
                <h5 className="pl-2 text-xl font-semibold text-gray-800">
                  {wishlist.length} items
                </h5>
              </div>

              <br />

              <div className="w-full border-t">
                {wishlist.map((item, index) => (
                  <div key={index} className="p-4 border-b">
                  <div className="flex items-center justify-between mb-4">
  <div className="flex items-center">
    {item.image ? (
      <img
        src={item.image}
        alt={item.title}
        className="small-image"
      />
    ) : (
      <div className="small-image flex items-center justify-center">
        <span>No Image</span>
      </div>
    )}
    <div className="ml-3">
      <h5 className="font-semibold text-gray-600">
        {item.title}
      </h5>
      <p className="font-semibold text-gray-500">
        INR₹{item.price.toFixed(2)}
      </p>
    </div>
  </div>
  <div className="flex">
    <button
      className="px-3 py-1 bg-red-500 text-white rounded"
      onClick={() => removeFromWishlistHandler(item)}
    >
      Remove
    </button>
    <button
      className="ml-2 px-3 py-1 bg-red-500 text-white rounded"
      onClick={() => quantityChangeHandler(item)}
    >
      Add To Cart
    </button>
  </div>
</div>

                  </div>
                ))}
              </div>
              <div className="px-5 mb-3">
              {/* <Link to="/buynow" className="text-green-500 hover:text-red-500">
               Buy Now (INR₹{totalPrice.toFixed(2)})
                </Link> */}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default WishList;
