const errorLogger = (error, req, res, next) => {
  console.log('errorMessage : ', error.message)
  console.log('errorLogger: ', error)
  next(error)
}

export { errorLogger }
