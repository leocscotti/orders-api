require("dotenv").config();

const express = require("express");

const orderRoutes = require("./routes/orderRoutes");

const app = express();

const {swaggerUI, swaggerSpec}= require("./docs/swagger");

app.use(express.json());

app.use("/order", orderRoutes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

module.exports = app;