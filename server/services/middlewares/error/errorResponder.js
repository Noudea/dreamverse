const errorResponder = (error, req, res, next) => {
  if (error.message === 'missing_ressource') {
    return res.status(404).json({
      error: {
        name: error.message,
        description: 'the ressource you ask is missing or not avaible'
      }
    })
  }
  if (error.message === 'invalid_request') {
    return res.status(422).json({
      error: {
        name: error.message,
        description: 'invalid body request'
      }
    })
  }
  next(error)
}

export { errorResponder }
