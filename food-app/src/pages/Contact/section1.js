import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to server)
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
      };
  return (
    <div style={styles.container}>
    <h1 style={styles.header}>Contact Us</h1>
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="name">Name:</label>
        <input
          style={styles.input}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="email">Email:</label>
        <input
          style={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="message">Message:</label>
        <textarea
          style={styles.textarea}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  </div>
  );
};




const styles = {
    container: {
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
    },
    header: {
      fontSize: '2.5em',
      marginBottom: '20px',
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      marginBottom: '5px',
      fontSize: '1.2em',
    },
    input: {
      padding: '10px',
      fontSize: '1em',
      width: '100%',
      boxSizing: 'border-box',
    },
    textarea: {
      padding: '10px',
      fontSize: '1em',
      width: '100%',
      height: '100px',
      boxSizing: 'border-box',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1.2em',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    },
  };
    

  export default Section1;
  
  