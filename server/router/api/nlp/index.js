import express from 'express'
import language from '@google-cloud/language'

const router = express.Router()

router.post('/test', async (req, res) => {
  // Instantiates a client
  const client = new language.LanguageServiceClient()

  // The text to analyze
  const text = 'This can be your phone or a small recording device. When you wake up, you speak into the microphone and record your dreams. This is not something I personally like, but I do know people that only use this method.'

  const document = {
    content: text,
    type: 'PLAIN_TEXT'
  }
  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({ document: document })
  const sentiment = result.documentSentiment

  console.log(`Text: ${text}`)
  console.log(`Sentiment score: ${sentiment.score}`)
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`)

  // Classifies text in the document
  const [classification] = await client.classifyText({ document })

  console.log('Categories:')
  classification.categories.forEach(category => {
    console.log(`Name: ${category.name}, Confidence: ${category.confidence}`)
  })

  return res.status(200).json({
    data: sentiment
  })
})

export default router
