import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
const app = express();

const port = 3000;
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => {
    console.log("mongo connected");
  })
  .catch((err) => {
    console.log("Faild to Connect", err);
  });
app.use("/user", userRoute);
app.listen(port, () => {
  console.log(`Server is runing at :http://localhost:${port}`);
});
