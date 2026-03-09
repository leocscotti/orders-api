const mongoose = require("mongoose");

/**
 * Conecta ao MongoDB
 */
async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/ordersdb");

    console.log("MongoDB conectado!");
  } catch (error) {
    console.error("Erro ao conectar MongoDB:", error);
    process.exit(1);
  }
}

module.exports = connectDB;