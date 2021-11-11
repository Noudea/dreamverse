import mongoose from 'mongoose'
const connectDb = async () => {
  await mongoose.connect('mongodb://dreamverse:password@mongodb:27017/dreamverse').then(() => {
  console.log("Connected to Database");
  }).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
  });
}

// module.exports = {connectDb}
export {connectDb}