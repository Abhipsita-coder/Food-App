import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const burgers = [
    { name: 'Classic Burger', description: 'Beef patty, lettuce, tomato, and cheese.', price: '$8.99' },
    { name: 'Cheese Burger', description: 'Beef patty, cheddar cheese, lettuce, and tomato.', price: '$9.99' },
    { name: 'Bacon Burger', description: 'Beef patty, bacon, lettuce, tomato, and cheese.', price: '$10.99' },
    { name: 'Veggie Burger', description: 'Veggie patty, lettuce, tomato, and cheese.', price: '$7.99' },
    { name: 'Chicken Burger', description: 'Grilled chicken, lettuce, tomato, and cheese.', price: '$9.49' },
  ];

const Section1 = () => {
  return (
    <div style={styles.container}>
    <h1 style={styles.header}>Burger Menu</h1>
    {burgers.map((burger, index) => (
      <div key={index} style={styles.burgerItem}>
        <h2 style={styles.burgerName}>{burger.name}</h2>
        <p style={styles.burgerDescription}>{burger.description}</p>
        <p style={styles.burgerPrice}>{burger.price}</p>
      </div>
    ))}
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
    burgerItem: {
      borderBottom: '1px solid #ddd',
      padding: '20px 0',
    },
    burgerName: {
      fontSize: '1.8em',
      margin: '10px 0',
    },
    burgerDescription: {
      fontSize: '1.2em',
      margin: '10px 0',
    },
    burgerPrice: {
      fontSize: '1.2em',
      margin: '10px 0',
      fontWeight: 'bold',
    },
  };
    

  export default Section1;
  
  