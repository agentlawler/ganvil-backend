const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)


const hashPassword = async (password) => {
    let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    return hashedPassword
}

const comparePassword = async (storedPassword, password) => {
    let passwordMatch = await bcrypt.compare(password, storedPassword)
    return passwordMatch
}

module.exports = {
   
    comparePassword,
    hashPassword
}