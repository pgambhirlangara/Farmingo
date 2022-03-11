const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const customerRoutes = require("./routes/Customer");
const farmerRoutes = require("./routes/Farmer");
const orderRoutes = require("./routes/Order");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Database connected...");
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/", (request, response) => {
  console.log("Requested home page");
  response.send("HOME PAGE");
});

// middleware
app.use("/customer", customerRoutes);
app.use("/farmer", farmerRoutes);
app.use("/order", orderRoutes);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
