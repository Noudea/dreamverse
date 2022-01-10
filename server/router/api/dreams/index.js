import express from 'express'

const router = express.Router()

/**
 * @swagger
 * /api/dreams:
 *  get:
 *    tags:
 *      - dream
 *    summary:
 *    description:
 */
router.get('/:userId', async (req, res) => {
  return res.status(200).json({
    data: 'test dreams'
  })
})

export default router
