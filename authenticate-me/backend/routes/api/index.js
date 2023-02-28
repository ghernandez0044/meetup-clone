// Needed imports
const router = require('express').Router()
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth')
const sessionRouter = require('./session')
const groupsRouter = require('./groups')

// Global middleware
router.use(restoreUser)

// Connecting routers
router.use('/session', sessionRouter)
router.use('/groups', groupsRouter)

// Test endpoint
router.post('/test', (req, res) => {
    res.json({
        requestBody: req.body
    })
})

module.exports = router