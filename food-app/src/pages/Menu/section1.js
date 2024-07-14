// import React, { useState } from 'react';
// import { Container, Row, Col } from "react-bootstrap";
// import Burger from "../../assets/hero/hero-2.png";
// import { Link } from "react-router-dom";

// const burgers = [
//     { name: 'Classic Burger', description: 'Beef patty, lettuce, tomato, and cheese.', price: '$8.99' },
//     { name: 'Cheese Burger', description: 'Beef patty, cheddar cheese, lettuce, and tomato.', price: '$9.99' },
//     { name: 'Bacon Burger', description: 'Beef patty, bacon, lettuce, tomato, and cheese.', price: '$10.99' },
//     { name: 'Veggie Burger', description: 'Veggie patty, lettuce, tomato, and cheese.', price: '$7.99' },
//     { name: 'Chicken Burger', description: 'Grilled chicken, lettuce, tomato, and cheese.', price: '$9.49' },
//   ];

// const Section1 = () => {
//   return (
//     <div style={styles.container}>
//     <h1 style={styles.header}>Burger Menu</h1>
//     {burgers.map((burger, index) => (
//       <div key={index} style={styles.burgerItem}>
//         <h2 style={styles.burgerName}>{burger.name}</h2>
//         <p style={styles.burgerDescription}>{burger.description}</p>
//         <p style={styles.burgerPrice}>{burger.price}</p>
//       </div>
//     ))}
//   </div>

//   );
// };




// const styles = {
//     container: {
//       padding: '20px',
//       maxWidth: '800px',
//       margin: '0 auto',
//       textAlign: 'center',
//     },
//     header: {
//       fontSize: '2.5em',
//       marginBottom: '20px',
//     },
//     burgerItem: {
//       borderBottom: '1px solid #ddd',
//       padding: '20px 0',
//     },
//     burgerName: {
//       fontSize: '1.8em',
//       margin: '10px 0',
//     },
//     burgerDescription: {
//       fontSize: '1.2em',
//       margin: '10px 0',
//     },
//     burgerPrice: {
//       fontSize: '1.2em',
//       margin: '10px 0',
//       fontWeight: 'bold',
//     },
//   };
    

//   export default Section1;
  
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

function Section1() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <section className="menu_section">
      <Container>
        <Row>
          {/* <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR CRAZY BURGERS</h2>
            <p className="para">
              Aliquam a augue suscipit, luctus neque purus ipsum neque undo
              dolor primis libero tempus, blandit a cursus varius magna
            </p>
          </Col> */}
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
        {/* <Row className="pt-5">
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
        </Row> */}
      </Container>
    </section>
  );
}

export default Section1;
