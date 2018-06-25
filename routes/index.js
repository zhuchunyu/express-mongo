const express = require('express');
const router = express.Router();

const User = require('../lib/model/user')

/* GET home page. */
router.get('/', async (req, res, next) => {

    const users = await User.find({});
    console.log(users);

    res.render('index', {title: '用户列表', users: users});
});

router.get('/add', async (req, res, next) => {
    res.render('add', {title: '添加用户'});
});

router.post('/add', async (req, res, next) => {

    console.log(req.body);

    const user = new User({
        name: req.body.name,
        password: req.body.password,
        created: new Date()
    });

    await user.save();

    res.redirect('/');
});

router.get('/delete/:id', async (req, res, next) => {

    console.log(req.params.id)

    await User.remove({_id: req.params.id});

    res.redirect('/');
});

module.exports = router;
