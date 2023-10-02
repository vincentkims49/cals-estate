import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: string,
      requred: true,
      unique: true,
    },
    email: {
      type: string,
      requred: true,
      unique: true,
    },
    password: {
      type: string,
      requred: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
