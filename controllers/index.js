const router = require('express').Router();


const apiRoutes = require('./api');
const homeRoutes = require('./api')

router.use('/api', apiRoutes);

module.exports = router;