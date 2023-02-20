const { Router } = require('express');
const menuRouter = require('./menuRouter').default;
const categoryRouter = require('./categoryRouter').default;
const userRouter = require('./userRouter').default;

const router = Router();

router.use('/menu', menuRouter);
router.use('/category', categoryRouter);
router.use('/user', userRouter);

module.exports = router