const mongoose = require('mongoose');

module.exports = {
    resgisterUserSchema: new mongoose.Schema({
        "name": String,
        "email": { type: String, required: true },
        "password": { type: String, required: true },
        "userId": { type: String, required: true },
        "dob": Number
    })
}