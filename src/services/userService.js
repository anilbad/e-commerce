const User = require("../models/userModal");
const ApiError = require("../utils/ApiError");

const createUser = async ({email, password}) => {
    if(await User.isEmailTaken(email)){
        throw new ApiError(422, "Email already exist.");
    }
    const user = User.create({email, password});
    return user;
}

module.exports = {
    createUser
}