const mongoose = require('../connection')

//定义模型
const userSchema = mongoose.Schema({
    name: String,
    mobile: String,
    password: String,
    created: Date
});

const User = mongoose.model('User', userSchema);

module.exports = User;
