const express = require('express');
const router = express.Router();

// @route  GET api/POSTS
// @desc   Test route
// @access Public
router.get('/', (req, res) => res.send('POSTS ROUTE'));

module.exports = router;
