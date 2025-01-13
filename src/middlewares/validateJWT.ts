import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { userModel } from "../models/userModel";

import { ExtendRequest } from "../types/extendedRequest";

const validateJWT = (req: ExtendRequest, res: Response, next: NextFunction) => {
  const authorizationHeader = req.get("authorization");
  if (!authorizationHeader) {
    res.status(403).send("Authorization Header Was Not Provide");
    return;
  }
  const token = authorizationHeader.split(" ")[1];
  if (!token) {
    res.status(403).send("Token Was Not Found");
    return;
  }
  jwt.verify(
    token,
    "hKx6NCcg0/tkXnSsjtkWWeJh2c0vJsnSMXor8sXHAXvE2cEENHgYfy6GHsIsTwFL",
    async (err, payload) => {
      if (err) {
        res.status(403).send("Invalid Token");
        return;
      }
      if (!payload) {
        res.status(403).send("Invalid Token payload");
        return;
      }
      const userpayload = payload as {
        email: String;
        firstName: String;
        lastName: String;
      };
      const user = await userModel.findOne({ email: userpayload.email });
      req.user = user;
      next();
    }
  );
};
export default validateJWT;
