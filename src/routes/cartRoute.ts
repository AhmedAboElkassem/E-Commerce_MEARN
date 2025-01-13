import express from "express";
import validateJWT from "../middlewares/validateJWT";
import {
  addItemToCart,
  clearItemInCart,
  deleteItemInCart,
  getActiveCartForUser,
  UpdateItemInCart,
} from "../services/cartService";
import { ExtendRequest } from "../types/extendedRequest";
const router = express.Router();

router.get("/", validateJWT, async (req: ExtendRequest, res) => {
  const userId = req.user._id;
  console.log(typeof userId);
  const cart = await getActiveCartForUser({ userId: userId });
  res.status(200).send(cart);
});
router.post("/items", validateJWT, async (req: ExtendRequest, res) => {
  const userId = req.user._id;
  const { productId, quantity } = req.body;
  const response = await addItemToCart({ userId, productId, quantity });
  res.status(response.statusCode).send(response.data);
});
router.put("/items", validateJWT, async (req: ExtendRequest, res) => {
  const userId = req?.user?._id;
  const { productId, quantity } = req.body;
  const response = await UpdateItemInCart({ userId, productId, quantity });
  res.status(response.statusCode).send(response.data);
});
router.delete(
  "/items/:productId",
  validateJWT,
  async (req: ExtendRequest, res) => {
    const userId = req?.user?._id;
    const { productId } = req.params;
    const response = await deleteItemInCart({ userId, productId });
    res.status(response.statusCode).send(response.data);
  }
);
router.delete("/", validateJWT, async (req: ExtendRequest, res) => {
  const userId = req?.user?._id;
  const response = await clearItemInCart({ userId });
  res.status(response.statusCode).send(response.data);
});
export default router;
