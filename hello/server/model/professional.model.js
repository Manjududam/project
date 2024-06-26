// models/professional.js

import mongoose from 'mongoose';

const professionalSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        minlength: 6
    }
}, { timestamps: true });

const Professional = mongoose.model('Professional', professionalSchema);

export default Professional;
