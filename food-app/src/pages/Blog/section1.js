import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";



const blogPosts = [
    { title: 'Post 1', content: 'Content for the first blog post.', author: 'Author 1', date: '2024-07-01' },
    { title: 'Post 2', content: 'Content for the second blog post.', author: 'Author 2', date: '2024-07-02' },
    { title: 'Post 3', content: 'Content for the third blog post.', author: 'Author 3', date: '2024-07-03' },
  ];

  
const Section1 = () => {
  return (
    <div style={styles.container}>
    <h1 style={styles.header}>Blog</h1>
    {blogPosts.map((post, index) => (
      <div key={index} style={styles.post}>
        <h2 style={styles.title}>{post.title}</h2>
        <p style={styles.author}>By {post.author} on {post.date}</p>
        <p style={styles.content}>{post.content}</p>
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
      textAlign: 'left',
    },
    header: {
      fontSize: '2.5em',
      marginBottom: '20px',
      textAlign: 'center',
    },
    post: {
      borderBottom: '1px solid #ddd',
      padding: '20px 0',
    },
    title: {
      fontSize: '1.8em',
      margin: '10px 0',
    },
    author: {
      fontSize: '1em',
      color: '#555',
      margin: '10px 0',
    },
    content: {
      fontSize: '1.2em',
      margin: '10px 0',
    },
  };
  
  
  export default Section1;
  
  