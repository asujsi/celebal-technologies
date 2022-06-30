const mongoose = require("mongoose");

const connection_url =
  "mongodb+srv://admin:1234@cluster0.6hqumeh.mongodb.net/studentDB?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    await mongoose.connect(connection_url);
    await console.log("Database Connected!");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
