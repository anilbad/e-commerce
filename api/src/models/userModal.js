const mongoose = require("mongoose");
const { default: validator } = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        require: true,
        trim: true
    },
    lname: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("Invalid Email")
            }
        }
    },
    password:{
        type: String,
        require: true,
        trim: true,
        minlength: 8,
        validate(value) {
            if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                throw new Error('Password must contain at least one letter and one number');
            }
        },
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
},
{
    timestamps: true,
});

/**
 * Check is email already taken
 * @param {*} email 
 * @param {*} excludeUserId 
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
    const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
    return !!user;
}

/**
 * Check is password matched
 * @param {*} password 
 */
userSchema.methods.isPasswordMatch = function (password) {
    const user = this;
    return bcrypt.compare(password, user.password);
}

userSchema.pre('save', async function (next) {
    const user = this;
    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;