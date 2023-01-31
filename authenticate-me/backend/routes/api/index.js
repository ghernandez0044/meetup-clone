// Needed imports
const router = require('express').Router()
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth')

// Global middleware
router.use(restoreUser)

// Connecting routers

// Test endpoint
router.post('/test', (req, res) => {
    res.json({
        requestBody: req.body
    })
})

module.exports = router