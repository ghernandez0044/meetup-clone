// Needed imports
const router = require('express').Router()
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth')
const sessionRouter = require('./session')

// Global middleware
router.use(restoreUser)

// Connecting routers
router.use('/session', sessionRouter)

// Test endpoint
router.post('/test', (req, res) => {
    res.json({
        requestBody: req.body
    })
})

module.exports = router