const { Router } = require('express');
const menuRouter = require('./menuRouter').default;
const categoryRouter = require('./categoryRouter').default;
const userRouter = require('./userRouter').default;
const reviewRouter = require('./reviewRouter').default;

const router = Router();

router.use('/menu', menuRouter);
router.use('/category', categoryRouter);
router.use('/user', userRouter);
router.use('/review', reviewRouter);

module.exports = router;