const { Cart } = require('../models')

const FindCartByUser = async (req, res) => {
    try{
        const cart = await Cart.findAll({
            where: {username: req.body.username}
        })
        res.send(cart)
    } catch (error) {
        throw error
    }
}

const UpdateCart = async (req,res ) => {
    try {
        const cart = await Cart.update(
            {...req,body},
            { where: {id: req.params.cartId}, returning: true}
        )
        res.send(cart)
    } catch (error) {
        throw error
    }
}

module.exports = {
    FindCartByUser,
    UpdateCart
}