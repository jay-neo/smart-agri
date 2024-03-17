require("dotenv").config();
const cors = require('cors');
const cookieParser = require("cookie-parser");

const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

const helmet = require('helmet');


const { checkForAuthenticationCookie } = require("./middlewares/auth");

// Connect MongoDB
require("./db/db");

// Database Schema
require("./models/user");


app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(checkForAuthenticationCookie("auth"));
app.use(express.urlencoded({ extended: false })); 



app.use(require("./routes/record"));
app.use(require("./routes/user"));
app.use(require("./routes/user-thingspeak"));




app.get("/", (req, res) => {
  res.send("hi");
});



app.listen(PORT, () => {
  if (process.env.NODE_ENV == "development") {
    console.log(`Server started at PORT: http://localhost:${PORT}`);
  }
});
