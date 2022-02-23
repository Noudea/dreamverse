const failSafeHandler = (error, req, res, next) => {
  res.status(500).send(error)
}

export { failSafeHandler }
