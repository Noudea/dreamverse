import DreamModel from '../../../models/Dream'

const getDream = async (filter) => {
  const dream = await DreamModel.find(filter).exec()
  if (dream.length === 0) {
    return false
  }
  return dream
}

const createDream = async (dream) => {
  const createdDream = await DreamModel.create(dream)
  return createdDream
}

const deleteDream = async (dreamId) => {
  const deletedDream = await DreamModel.findByIdAndDelete(dreamId)
  return deletedDream
}

export { getDream, createDream, deleteDream }
