import UserModel from '../../../models/User'

const getUser = async (filter) => {
  const user = await UserModel.find(filter).exec()
  if (user.length === 0) {
    throw new Error('missing_ressource')
    // return false
  }
  return user
}

const createUser = async (user) => {
  const createdUser = await UserModel.create(user)
  return createdUser
}

const deleteUser = async (userId) => {
  const createdUser = await UserModel.findByIdAndDelete(userId)
  return createdUser
}

export { getUser, createUser, deleteUser }
