const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;
const MONGODB_NAME = process.env.MONGODB_NAME;


mongoose
  .connect(MONGO_URI, { dbName: MONGODB_NAME, family: 4 })
  .then((res) => {
    if (process.env.NODE_ENV == "development") {
      console.log(`Connected to MongoDB : ${MONGO_URI}/${MONGODB_NAME}`);
    }
  })
  .catch((err) => {
    console.error("Failed to connect with MongoDB: ", err.message);
  });
