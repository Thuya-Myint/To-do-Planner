const express = require("express");
require("dotenv").config();
const cors = require("cors");
const compression = require("compression");
const mongoose = require("mongoose");
const port = process.env.PORT;
const CreateUserRoute = require("./routes/userRoutes");
const todoroute = require("./routes/todo");
const notiroute=require("./routes/noti");
const progressroute=require("./routes/progress");
const completedroute=require("./routes/complete");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.send("Api starts Working!");
});
mongoose
  .connect(
    "mongodb+srv://thuyamyint2022:thuya2022@cluster-1.drik0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1",
  )
  .then(() => {
    console.log("Connect to Mongo DB!");
    //ensure that successfully connect to mongo and logs port
    app.listen(port, () => {
      console.log("App is listening on Port " + port);
    });
  })
  .catch((error) => {
    console.log("Connection Failed ! Details : ", error);
  });

app.use("/api/", CreateUserRoute);
app.use("/api/todo", todoroute);
app.use("/api/noti", notiroute);
app.use("/api/progress", progressroute);
app.use("/api/completed", completedroute);
