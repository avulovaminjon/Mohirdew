const { Router } = require('express')

const {
    getHomePage
} = require('../controller/zayShop.controller')

const router = Router()

// Start
router.get('/', getHomePage)

// End

module.exports = router