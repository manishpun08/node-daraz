import express from "express";
import { validateReqBody } from "../middleware/product.middleware.js";
import { addUserSchema } from "./user.validation.js";
import { User } from "./user.model.js";
import * as bcrypt from "bcrypt";

const router = express.Router();

// create user
router.post("/user/add", validateReqBody(addUserSchema), async (req, res) => {
  // extract new user from req.body
  const newUser = req.body;
  // check if user with same email exists,
  const user = await User.findOne({ email: newUser.email });
  // if same email exists, throw error
  if (user) {
    return res
      .status(409)
      .send({ message: "User with this email already exists." });
  }
  // password should be hashed using bcrypt
  let saltRounds = 10;
  const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
  newUser.password = hashedPassword;

  // create user
  await User.create(newUser);
  // send response
  return res.status(200).send({ message: "User is registered successfully." });
});
export default router;
