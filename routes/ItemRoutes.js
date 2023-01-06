const router = require('express').Router()
const controller = require('../controllers/ItemController')

router.get('/', controller.SeeAllItems)
router.get('/:itemId', controller.FindItemById)
router.post('/', controller.CreateItem)
router.put('/:itemId', controller.UpdateItem)
router.delete('/:itemId', controller.DeleteItems)

module.exports = router