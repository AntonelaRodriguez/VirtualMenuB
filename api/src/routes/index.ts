const { Router } = require('express')
const menuRouter = require('./menuRouter')
const categoryRouter = require('./categoryRouter')

const router = Router()

router.use('/menu', menuRouter)
router.use('/category', categoryRouter)

module.exports = router