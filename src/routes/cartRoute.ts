import express from "express";
import validateJWT from "../middlewares/validateJWT";
import { getActiveCartForUser } from "../services/cartService";
import { ExtendRequest } from "../middlewares/validateJWT";
const router = express.Router();

router.get("/", validateJWT, async (req: ExtendRequest, res) => {
  const userId = req.user._id;
  const cart = await getActiveCartForUser({ userId: userId });
  res.status(200).send(cart);
});

export default router;
