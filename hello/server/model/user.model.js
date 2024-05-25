
import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
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
        
    },
    // profilePicture: {
    //     type: String,
    //     default : "https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg",
        
    // }

}, {timeStamp : true});

const User = mongoose.model('User', userSchema);

export default User;

