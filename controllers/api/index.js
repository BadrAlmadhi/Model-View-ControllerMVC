const router = require('express').Router();
const userRouter = require('./user');
const commentRouter = require('./comment');
const blogRouter = require('./blog');

router.use('/blogs', blogRouter);
router.use('/comments', commentRouter);
router.use('/users', userRouter);

module.exports = router;