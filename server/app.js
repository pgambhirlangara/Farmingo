const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const customerRoutes = require("./routes/Customer");
const orderRoutes = require("./routes/Order");
const farmerRoutes = require('./routes/Farmer');
const postRoutes = require('./routes/Post');
const farmRoutes = require('./routes/FarmProfile');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Database connected...");
});

// Middleware
app.use(express.json({limit: '50mb'}));


app.use(morgan("combined"));

app.get("/", (request, response) => {
  console.log("Requested home page");
  response.send("HOME PAGE");
});

// middleware
app.use("/customer", customerRoutes);
app.use("/order", orderRoutes);
app.use('/farmer', farmerRoutes);
app.use('/posts', postRoutes);
app.use('/farm', farmRoutes);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
