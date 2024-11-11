import mongoose from "mongoose";

export async function connectDB() {
  try {
    let connection = await mongoose.connect("mongodb+srv://asad:asad@asad.qxzyt.mongodb.net/FYF");
    console.info("asad");
  } catch (err) {
    console.log("err in connection=>", err);
  }
}