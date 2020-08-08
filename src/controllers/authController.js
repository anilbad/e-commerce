const userService = require("../services/userService");
const catchAsync = require("../utils/catchAsync");

const register = catchAsync( async (req, res) => {
    const {email, password} = req.body;
   try{
    const user = await userService.createUser({email, password});
    return res.send(user);
   }catch(e){
    res.status(e.statusCode).send(e.message);
   }
})

module.exports = {
    register
}