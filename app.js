require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

// rotas
const orderRoutes = require("./routes/orderRoutes");
app.use("/order", orderRoutes);

// swagger
const { swaggerUi, swaggerSpec } = require("./docs/swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;