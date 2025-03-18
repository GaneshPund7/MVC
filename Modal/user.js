const mongoose = require('mongoose');
const { type } = require('os');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        // unique: true
    },

    mobileNumber: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true
    }
    
},
    { timestamps: true })

module.exports = mongoose.model('dentistUser', UserSchema);