import mongoose from 'mongoose'
const connectDb = async () => {
  await mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connected to Database");
  }).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });
}

// module.exports = {connectDb}
export {connectDb}