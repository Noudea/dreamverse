import express from 'express'
import { createDream, deleteDream, getDream } from '../../../services/database/dream'

const router = express.Router()

/**
 * Api endpoint to get dream informations
 */
router.get('/:dreamId', async (req, res, next) => {
  try {
    const dreamId = req.params.dreamId
    const dream = await getDream({ _id: dreamId })

    if (!dream) {
      throw new Error('missing_ressource')
    }
    return res.status(200).json({
      success: dream
    })
  } catch (error) {
    next(error)
  }
})

/**
 * Api endpoint to create dream
 */
router.post('/', async (req, res, next) => {
  try {
    const { title, content, description, tag, user } = req.body

    const dream = {
      title: title,
      content: content,
      description: description,
      tag: tag,
      user: user
    }

    const createdDream = await createDream(dream)

    return res.status(201).json({
      success: createdDream
    })
  } catch (error) {
    next(error)
  }
})

/**
 * Api endpoint to update dream
 */
router.patch('/', async (req, res) => {
  return res.status(200).json({
    success: req.body
  })
})

/**
 * Api endpoint to delete dream
 */
router.delete('/', async (req, res, next) => {
  try {
    const dreamId = req.body.dreamId

    const deletedDream = await deleteDream(dreamId)

    return res.status(200).json({
      success: deletedDream
    })
  } catch (error) {
    next(error)
  }
})
export default router
