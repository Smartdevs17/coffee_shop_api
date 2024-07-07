import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";

export const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: [true, "message is required"],
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    avatar: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    isAdmin:{
        type: Boolean,
        required: false,
        default: false
    },
},{
    timestamps: true
})

//remove password when sending display
userSchema.methods.toJSON = function(){
    const userObject = this.toObject();
    const {__v,password,...object } = userObject;
    const newObject = {
        ...object
    }
    return newObject;
};

//hash the user password
userSchema.pre('save', function(next){
    const user = this;
    if(user.isModified("password")){
        bcrypt.genSalt(10,function(err, salt){
            bcrypt.hash(user.password,salt,function(err,hashPassword){
                user.password = hashPassword;
                next();
            })
        })
    }else{
        next();
    }
})

