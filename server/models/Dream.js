import mongoose from 'mongoose'
const { Schema } = mongoose

const DreamSchema = new Schema({
  title: {
    type: String
  },
  content:{
    type: String
  },
  description: {
    type: String,
  },
  tag: {
    type: String,
    enum : ['lucid','nightmare']
  },
  public: {
    type: Boolean,
    default : false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }
},{timestamps: true})

const DreamModel = mongoose.model('Dream',DreamSchema)

export default DreamModel