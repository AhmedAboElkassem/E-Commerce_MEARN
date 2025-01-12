import { productModel } from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  const products = [
    {
      title: "Delllabtop",
      image:
        "https://th.bing.com/th/id/R.0038e850ecbc18caf22fb9a04427ef9f?rik=jo0BabkMu31v0A&pid=ImgRaw&r=0",
      price: 15000,
      stock: 98,
    },
  ];
  const existingProducts = await getAllProducts();
  if (existingProducts.length === 0) {
    await productModel.insertMany(products);
  }
};
