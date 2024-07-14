import React, { useState } from 'react';
import { Col, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cart';
import { addToWishList, removeFromWishList } from '../../redux/actions/wishlist.js';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toast } from "react-toastify";
const Cards = ({ image, rating, title, paragraph, price, renderRatingIcons, data }) => {
  const dispatch = useDispatch();
  const [inWishlist, setInWishlist] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(data));
    toast.success("Added to cart");
  };


  const removeFromWishlistHandler = (data) => {
    setInWishlist(!inWishlist);
    dispatch(removeFromWishList(data));
    toast.success("Remove from wishlist")
  };

  const addToWishlistHandler = (data) => {
    setInWishlist(!inWishlist);
    dispatch(addToWishList(data));
    toast.success("Added to wishlist")
  };

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist">
              {inWishlist ? (
                <AiFillHeart
                  size={22}
                  className="cursor-pointer absolute right-2 top-5 text-red-500"
                  onClick={() => removeFromWishlistHandler(data)}
                  title="Remove from wishlist"
                />
              ) : (
                <AiOutlineHeart
                  size={22}
                  className="cursor-pointer absolute right-2 top-5 text-gray-700"
                  onClick={() => addToWishlistHandler(data)}
                  title="Add to wishlist"
                />
              )}
            </div>
          </div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>
            <div className="add_to_card">
              <button onClick={handleAddToCart}>
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;