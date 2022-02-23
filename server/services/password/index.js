import bcrypt from 'bcryptjs'

/**
 * hash the password
 * @param {String} password
 * @returns {String} hashed password
 */
const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

/**
 *  verify if the password exist
 * @param {String} password submitted password
 * @param {String} hash the password in database
 * @returns {Boolean} true if the password is correct
 */
const verifyPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash)
}
export { hashPassword, verifyPassword }
