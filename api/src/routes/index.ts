const { Router } = require('express');
const menuRouter = require('./menuRouter').default;
const categoryRouter = require('./categoryRouter').default;
const userRouter = require('./userRouter').default;
const reviewRouter = require('./reviewRouter').default;
const imageRouter = require('./imageRouter'). default;

const router = Router();

router.use('/menu', menuRouter);
router.use('/category', categoryRouter);
router.use('/user', userRouter);
router.use('/review', reviewRouter);
router.use('/image', imageRouter);

module.exports = router;