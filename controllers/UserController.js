const { User } = require('../models')
const middleware = require('../middleware')


const SeeAllUsers = async (req,res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}

const SeeOneUser = async (req,res) => {
    try {
        const post = await User.findOne({where: {id: req.body.postId}})
        res.send(post)
       } catch (error) {
        throw error
       }
}

const userLogin = async (req,res) => {
    try {
        const user = await User.findOne({
            where: { username: req.body.username },
            raw: true
        })
        console.log(user)
        if (
            user &&
            (await middleware.comparePassword(user.password, req.body.password))
        ) {
            let payload = {
                username: user.username,
                id: user.id,
                
            }
            return res.send({user: payload})
        }
        res.status(401).send({status: 'Error', msg: 'Unauthorized, Login'})
    } catch (error) {
        throw error
    }
}

const userRegister = async (req,res) => {
    try {
        let {email, password,username, firstName, lastName, profilePic} = req.body
        let passwordDigest = await middleware.hashPassword(password)
        password = passwordDigest
        const user = await User.create({
            email, password, username, firstName, lastName, profilePic
        })
        res.send(user)
    } catch (error) {
        throw error
    }
}

const UpdatePassword = async (req,res) => {
    try {
        const { oldPassword, newPassword } = req.body
        const user = await User.findbyPk(req.params.userId) 
    if (
        user &&
        (await middleware.comparePassword(
            user.dataValues.password,
            oldPassword
        ))
    ) { 
        let passwordDigest = await middleware.hashPassword(newPassword)
        await user.update({passwordDigest})
        return res.send({ status: 'Ok', payload: user})
    }
    res.status(401).send({status: 'Error', msg: 'Unauthorized, UpdatePassword'})
    } catch (error) {
        throw error
    }
}

module.exports = {
    SeeOneUser,
    SeeAllUsers,
    userLogin,
    userRegister,
    UpdatePassword
}