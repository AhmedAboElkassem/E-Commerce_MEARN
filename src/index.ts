import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import { seedInitialProducts } from "./services/productService";
import { productModel } from "./models/productModel";
import productRoute from "./routes/productRoute";
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

seedInitialProducts();
app.use("/user", userRoute);
app.use("/products", productRoute);
app.listen(port, () => {
  console.log(`Server is runing at :http://localhost:${port}`);
});
