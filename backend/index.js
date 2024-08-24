const express = require('express');
require('dotenv').config();
require('./src/db/mongoose');

var cors = require('cors')
const router = require("./src/routers");
const app = express();
const port = process.env.PORT || 5001;

const corsOptions = {
    origin: 'http://localhost:3000',  
    credentials: true,                 
  };
  
  app.use(cors(corsOptions));
app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
