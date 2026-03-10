const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rm550769:040403@cluster0.lu1067q.mongodb.net/?appName=Cluster0"
    );

    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Erro ao conectar:", error);
  }
};

module.exports = connectDB;