const express = require("express");
const cors = require("cors");
const connectDB = require("./database/connection");
const studentRoute = require("./routes/studentRoute");
const adminRoute = require("./routes/adminRoute");
const app = express();

const PORT = 5000;

//mongodb connection
connectDB();

app.use(express.json());
app.use(cors());

app.use("/student", studentRoute);
app.use("/admin", adminRoute);

app.listen(PORT, () => {
  console.log(`Server started at port http://localhost:${PORT}/`);
});
