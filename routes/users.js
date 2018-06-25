const express = require('express');
const router = express.Router();

const User = require('../lib/model/user');

/* GET users listing. */
router.get('/', async (req, res, next) => {
    const users = await User.find({});
    console.log(users);

    res.render('index', {title: '用户列表', users: users});
});

module.exports = router;
