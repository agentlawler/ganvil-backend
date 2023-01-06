const { Item } = require('../models')

const SeeAllItems = async (req,res) => {
    try {
        const items = await Item.findAll()
        res.send(items)
    } catch (error) {
        throw error
    }
}

const FindItemById = async (req,res) => {
    try {
        const item = await Item.findByPk(req.params.itemId)
        res.send(item)
       } catch (error) {
        throw error
       }
}

const FindItemsByUser = async (req,res) => {
    try {
        const items = await Item.findAll({
            where: { userName: req.body.userName}})
            res.send(items)
        } catch (error) {
            throw error
        }
}

const CreateItem = async (req, res) => {
    try {
        const item = await Item.create({ ...req.body})
        res.send(item)
    } catch (error) {
        throw error
    }
}


const UpdateItem = async (req, res) => {
    try {
        const item = await Item.update(
            {...req.body},
            { where: {id: req.params.itemId}, returning: true }
        )
    res.send(item)
    } catch (error) { 
        throw error
    }
}

const DeleteItems = async (req,res) => {
    try {
        await Item.destroy({ where: { id: req.params.itemId}})
        res.send({ msg: 'Item Deleted', payload: req.params.itemId})
    } catch (error) {
        throw error
    }
}

module.exports = {
    SeeAllItems,
    FindItemById,
    FindItemsByUser,
    CreateItem,
    UpdateItem,
    DeleteItems
}