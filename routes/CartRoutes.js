const router = require('express').Router()
const controller = require('../controllers/CartController')

router.get('/:username', controller.FindCartByUser)
router.put('/:cartId', controller.UpdateCart)

module.exports = router