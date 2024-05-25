// models/student.js

import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
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

const Student = mongoose.model('Student', studentSchema);

export default Student;
