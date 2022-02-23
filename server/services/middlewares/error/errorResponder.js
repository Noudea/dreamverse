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
  if (error.message === 'user_already_exist') {
    return res.status(409).json({
      error: {
        name: error.message,
        description: 'user already exist'
      }
    })
  }

  // if (error.name === 'TokenExpiredError') {
  //   return res.status(409).json({
  //     error: {
  //       name: error.name,
  //       description: error.message
  //     }
  //   })
  // }

  // if (error.message === 'invalid_token') {
  //   return res.status(409).json({
  //     error: {
  //       name: 'invalid_token',
  //       description: 'invalid_token'
  //     }
  //   })
  // }

  if (error.message === 'invalid_authentication') {
    return res.status(401).json({
      error: {
        name: 'invalid_authentication',
        description: 'invalid_authentication'
      }
    })
  }
  next(error)
}

export { errorResponder }
