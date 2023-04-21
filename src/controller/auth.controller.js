import UserModel from "../model/user.model";
import Response from "../utils/responseMsg";
import bcrypt from "bcrypt";
import crypto from "crypto";

import JWT from "../middleware/jwt.middleware";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userInfo = await UserModel.findOne({ email: email });
    if (!userInfo) return Response.error401(res, "No user found for this e-mail address");
    const comparePassword = bcrypt.compareSync(password, userInfo.password);
    if (!comparePassword) return Response.error400(res, "Email or Password is Incorrect !");

    //token oluşturduğum yer
    const token = await JWT.createToken(email);
    if (!token) return Response.error400("an unexpected error");
    else return Response.success(res, "Success", { token });
  } catch (error) {
    console.log("Login", error);
    return Response.error404(res, "an unexpected error");
  }
};

const register = async (req, res, next) => {
  try {
    const { firstName, lastName, age, gender, email, password } = req.body;
    const userCheck = await UserModel.findOne({ email: email });
    if (userCheck) {
      return Response.error401(res, "This email already used");
    }
    const salt = bcrypt.genSaltSync(10);
    req.body.password = bcrypt.hashSync(password, salt);
    const createdUser = await UserModel.create(req.body);
    if (createdUser) {
      return Response.created(res, "User Created", createdUser);
    }
  } catch (error) {
    console.log("register", error);
    return Response.error404(res, "an unexpected error");
  }
};

export default {
  login,
  register,
};
