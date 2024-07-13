import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our website! We are a team of passionate developers dedicated to creating high-quality software solutions. Our mission is to deliver exceptional products that meet our clients' needs and exceed their expectations.
      </p>
      <p style={styles.paragraph}>
        Our expertise spans across various domains including web development, mobile app development, and more. We believe in continuous learning and staying updated with the latest technologies to provide the best services to our clients.
      </p>
      <p style={styles.paragraph}>
        Thank you for visiting our About page. Feel free to explore our website and learn more about our work and services. If you have any questions or inquiries, please don't hesitate to contact us.
      </p>
    </div>
  );
};




const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      textAlign: 'center',
    },
    header: {
      fontSize: '2.5em',
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.2em',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
  };
  

  export default Section1;
  
  