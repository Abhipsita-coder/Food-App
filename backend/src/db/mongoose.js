
require('dotenv').config();
const mongoose = require("mongoose");
const mongoURI = process.env.mongoURI;

mongoose.connect("mongodb+srv://gopalkalsiya1h:Gopal172002@cluster0.ggzm5fi.mongodb.net/MarBle", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => {
        console.error("MongoDB Connection Error:", err);
    });
