import DreamModel from '../../../models/Dream'

const getDream = async (filter) => {
  return await DreamModel.find(filter).exec()
}

const createDream = async (dream) => {
  return await DreamModel.create(dream)
}

export { getDream, createDream }
