const express = require("express");
const router = new express.Router();
const User = require("../models");
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const Order = require('../models/order');
const    ContactForm =require('../models/contact');
// Route for user registration
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
//  console.log(name);
//  console.log(email);
//  console.log(password);
        if (!email || !name || !password) {
            return res.status(400).json({ error: "Please provide all required information" });
        }

        const existingUser = await User.RegistrationUser.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        await User.RegistrationUser.create({
            email,
            name,
            password: hashedPassword,
        });

        res.status(201).json({ message: "Registration Successful" });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ error: "Failed to register user" });
    }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await User.RegistrationUser.findOne({ email });
    if (user) {
      console.log('Stored hashed password:', user.password);
      const passwordMatch = await bcrypt.compare(password, user.password);
      console.log(passwordMatch);
      if (passwordMatch) {
        console.log(`password match is ${passwordMatch}`);
        const token = await user.generateAuthToken();
        res.json({ token });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Failed to login" });
  }
});


router.post("/order", async (req, res) => {
  try {
    const orderData = req.body; 
    const newOrder = new Order(orderData);
    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post("/contactus", async (req, res) => {
  try {
    const formData = req.body; 
  
    const newContactForm = new ContactForm(formData);
    await newContactForm.save();

    res.status(201).json({ message: 'Contact form submitted successfully', formData: newContactForm });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
module.exports = router;
