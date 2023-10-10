import mongoose from "mongoose";

const connectDb = async (uri) => {
  try {
    const db_options = {
      dbName: "Users",
    };
    await mongoose.connect(uri, db_options);
    console.log("connected to database successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
