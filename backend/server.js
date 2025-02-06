const express = require("express");
const { authRoutes } = require("./routes");
const { ServerConfig } = require("./config");
const dotenv = require("dotenv");
const { connectMongoDB } = require("./db/connectMongoDB");

const app = express();
dotenv.config();

app.use("/api/auth", authRoutes);

app.listen(ServerConfig.PORT, (req, res) => {
  console.log("server is running");
  connectMongoDB();
});
