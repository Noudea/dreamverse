import express from 'express'
import { createDream, deleteDream, getDream } from '../../../services/database/dream'
import { decodeAccessToken } from '../../../services/token'

const router = express.Router()

/**
 * Api endpoint to get dream informations
 */
router.get('/:dreamId', async (req, res, next) => {
  try {
    const dreamId = req.params.dreamId

    if (!dreamId) {
      throw new Error('invalid_request')
    }

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
    // request body
    const dream = req.body

    // dream object
    const dreamObj = {
      ...dream,
      user: await decodeAccessToken(req.accessToken).user.id
    }
    // data validation
    if (!dream.title) {
      throw new Error('invalid_request')
    }
    // create dream
    const createdDream = await createDream(dreamObj)
    // send response
    return res.status(201).json({
      createdDream,
      accessToken: req.accessToken
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

    if (!dreamId) {
      throw new Error('invalid_request')
    }
    const deletedDream = await deleteDream(dreamId)
    if (!deletedDream) {
      throw new Error('missing_ressource')
    }
    return res.status(200).json({
      success: deletedDream
    })
  } catch (error) {
    next(error)
  }
})

export default router
