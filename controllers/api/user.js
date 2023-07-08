const router = require('express').Router();
const { User } = require('../../models');


router.post('/', async (req, res) => {
    try {
        const userData = await User.create(reg.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = User.findOn({ where: { email: res.body.email } });
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, please try again later' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Sorry incorrect password' });
            return;
        }

        res.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;