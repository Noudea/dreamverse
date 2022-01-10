const errorResponder = (error, req, res, next) => {
  if (error.message === 'missing_ressource') {
    return res.status(404).json({
      error: {
        name: error.message,
        description: 'the ressource you ask is missing or not avaible'
      }
    })
  }
  next(error)
}

export { errorResponder }
