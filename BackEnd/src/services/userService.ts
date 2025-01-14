import { userModel } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
interface RegisterParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterParams) => {
  const findUser = await userModel.findOne({ email });

  if (findUser) {
    return { data: "User already exist", statusCode: 400 };
  }
  const hashedpassword = await bcrypt.hash(password, 10);
  const newUser = new userModel({
    lastName,
    email,
    firstName,
    password: hashedpassword,
  });
  await newUser.save();
  return { data: generateJWT({ firstName, lastName, email }), statusCode: 200 };
};
interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({ email, password }: LoginParams) => {
  const findUser = await userModel.findOne({ email });

  if (!findUser) {
    return { data: "Incorrect Email or Password", statusCode: 400 };
  }

  const PasswordMatch = await bcrypt.compare(password, findUser.password);
  if (PasswordMatch) {
    return {
      data: generateJWT({
        firstName: findUser.firstName,
        lastName: findUser.lastName,
        email,
      }),
      statusCode: 200,
    };
  }
  return { data: "Incorrect Email or Password", statusCode: 400 };
};

const generateJWT = (data: any) => {
  return jwt.sign(data, process.env.JWT_SECRET || "");
};
