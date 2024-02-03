const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        default: "pending"
    },
    password: {
        type: String,
        default: "pending"
    }
})

const User = model('User', userSchema);

module.exports = User;