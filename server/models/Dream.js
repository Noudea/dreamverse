import mongoose from 'mongoose'
const { Schema } = mongoose

const DreamSchema = new Schema({
  title: {
    type: String,
    required: true,
    message: 'invalid_request'
  },
  content: {
    type: String
  },
  description: {
    type: String
  },
  tag: {
    type: String,
    enum: ['lucid', 'nightmare']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  }
}, { timestamps: true })

// DreamSchema.pre('validate', function () {
// })

// DreamSchema.validate().catch(error => {
//   console.log(error)
// })

const DreamModel = mongoose.model('Dream', DreamSchema)

export default DreamModel
