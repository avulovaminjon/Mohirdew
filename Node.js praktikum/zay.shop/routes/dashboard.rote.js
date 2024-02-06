const { Router } = require('express')

const {
    getDashboardPage
} = require('../controller/dashboard.controller')

const router = Router()

// Start 
router.get('/', getDashboardPage)
// end

module.exports = router