import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";
import { useSelector } from "react-redux";

const Header = () => {
  const [nav, setNav] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log("type dekh rha"+typeof cart); // should output "object" if it's an array
  console.log("Redux State:", useSelector((state) => state)); // Check the entire state structure
  console.log("Cart State:", cart); // Check specifically the cart state

  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    setNav(scrollValue > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">{cart ? cart.length : 0}</em>
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/wishlist">
                <div className="cart">
                  <i className="bi bi-heart fs-5"></i>
                  <em className="roundpoint">{wishlist ? wishlist.length : 0}</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
