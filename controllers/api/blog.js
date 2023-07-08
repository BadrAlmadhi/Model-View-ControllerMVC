const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res) => {
    try {
        const addBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(addBlog);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deleteBlog = await Blog.destroy({
            where: {
                is: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!deleteBlog) {
            res.status(400).json({ message: 'Blog if not found' });
            return;
        }

        res.status(200).json(deleteBlog);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;