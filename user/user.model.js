import mongoose from "mongoose";

// create schema
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    maxlength: 55,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    maxlength: 22,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 70,
  },
  dob: {
    type: Date,
    required: false,
    default: null,
  },
  gender: {
    type: String,
    required: false,
    default: null,
    enum: ["male", "female", "other"],
  },
});
// create table
export const User = mongoose.model("User", userSchema);
