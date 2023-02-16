const { Router } = require('express')
const menuRouter = require('./menuRouter').default
const categoryRouter = require('./categoryRouter').default

const router = Router()

router.use('/menu', menuRouter)
router.use('/category', categoryRouter)

module.exports = router