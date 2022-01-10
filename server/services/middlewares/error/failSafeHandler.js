const failSafeHandler = (error, req, res) => {
  res.status(500).send(error)
}

export { failSafeHandler }
