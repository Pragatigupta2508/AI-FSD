const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);