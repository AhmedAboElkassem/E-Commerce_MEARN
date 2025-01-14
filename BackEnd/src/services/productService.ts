import { productModel } from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      {
        title: "Dell labtop",
        image:
          "https://th.bing.com/th/id/R.0038e850ecbc18caf22fb9a04427ef9f?rik=jo0BabkMu31v0A&pid=ImgRaw&r=0",
        price: 15000,
        stock: 98,
      },
      {
        title: "hp Laptop",
        image:
          "https://th.bing.com/th/id/OIP.IhH5YBIdmXr7PIHRJix4CQHaEu?rs=1&pid=ImgDetMain",
        price: 25000,
        stock: 98,
      },
      {
        title: "Lenovo Laptop",
        image:
          "https://th.bing.com/th/id/OIF.6j6xikgzJrZhLmTp4n8I6w?rs=1&pid=ImgDetMain",
        price: 30000,
        stock: 98,
      },
    ];
    const existingProducts = await getAllProducts();
    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.log("Can Not Connect To Database", err);
  }
};
