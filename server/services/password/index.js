import bcrypt from 'bcryptjs'

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

const verifyPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}
export { hashPassword, verifyPassword }
