const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age:{
        type: Number,
        trim: true,
    },
    photo:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
}, {
    timestamps: true,
});

const Usermodel = mongoose.model("User", UserSchema);

module.exports = Usermodel;
