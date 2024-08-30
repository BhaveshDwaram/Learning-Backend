const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    fisrtName :{
        type : String,
        required : true
    },

    lastName :{
        type : String,
        required : false
    },

    email :{
        type : String,
        required : true,
        unique : true
    },

    gender :{
        type : String,
        required : true
    },

    jobTitle : {
        type : String,
        required :false
    }
},{timestamps :true});

const users = mongoose.model('user',usersSchema);

module.exports = users;