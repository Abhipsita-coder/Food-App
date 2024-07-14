import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../../components/Layouts/Cards";
import { Link } from "react-router-dom";
import {mockData} from "../../Statistics/data.js"

// Rating Logical Data
const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={`half${i}`} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

function Section3() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR CRAZY BURGERS</h2>
            <p className="para">
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius magna
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
              data={cardData} // Ensure `cardData` contains the required fields
              addToCart={() => addToCart(cardData)}
            />
          ))}
        </Row>
        <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>Burger Today</h5>
            </div>
          </Col>
          <Col sm={6} lg={5} className="ms-lg-auto">
            <div className="ads_box ads_img2">
              <h4 className="mb-0">BUY 1 GET 1</h4>
              <h5>Burger Tomorrow</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
