const mongoose = require("mongoose");

const connectMongoDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB connected successfully - ${conn.connection.host}`);
  } catch (error) {
    console.log("Failed connecting to mongodb");
    process.exit(1);
  }
};

module.exports = { connectMongoDB };
