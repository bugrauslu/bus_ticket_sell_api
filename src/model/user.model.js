import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 3,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    gender: {
      type: Boolean,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

const create = async (userData) => {
  const user = new User(userData);
  const savedData = await user.save();
  let savedJson = savedData.toJSON();
  delete savedJson.password;
  return savedJson;
};

const findOne = async (query) => {
  const findedUser = await User.findOne(query);
  return findedUser;
};

const removeById = (userId) => {};

export default {
  findOne,
  create,
};
