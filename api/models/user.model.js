import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        usename: {
            type: String,
            required: true,
            unique: true
        },
    email: {
        type: String,
        required: true,
        unique: true
         
    },
    password: {
        type: String,
        required: true,
       
         
    },
    avatar:{
        type: String,
        default: "https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png"
    },
},{timestamps:true});
const User = mongoose.model('User',userSchema);
export default User;