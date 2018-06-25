const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.136.132:27057/demo');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('connected');
});

module.exports = mongoose
