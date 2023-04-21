import jwt from "jsonwebtoken";
const { sign, verify } = jwt;
import crypto from "crypto";
import config from "config";
import userModel from "../model/user.model";
import Response from "../utils/responseMsg";

const createToken = async (email) => {
  try {
    const findedUser = await userModel.findOne({ email: email });
    if (findedUser) {
      const accessToken = await jwt.sign(
        {
          id: findedUser._id,
        },
        config.get("jwtConfig.jwt_secret"),
        { expiresIn: "10h" }
      );
      return accessToken;
    } else {
      return false;
    }
  } catch (error) {
    console.log("token oluşturulurken beklenmedik bir hata meydana geldi");
    return false;
  }
};

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.token;
    if (token) {
      jwt.verify(token, config.get("jwtConfig.jwt_secret"), (err, user) => {
        if (err) {
          return res.status(403).json({ error: "Token is not valid!!" });
        }
        req.user = user;
        next();
      });
    } else {
      return Response.error401(res, "You are not authenticated!!");
    }
  } catch (error) {
    console.log(error);
  }
};

export default {
  createToken,
  verifyToken,
};
