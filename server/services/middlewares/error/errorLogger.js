const errorLogger = (error, req, res, next) => {
  console.log('errorLogger: ', error)
  next(error)
}

export { errorLogger }
