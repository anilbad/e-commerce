const catchAsync = require("../../utils/catchAsync");
const userService = require("../../services/userService");

const getUsers = catchAsync(async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.send(users);
  } catch (e) {
    res.status(e.statusCode).send({
      errors: [
        {
          message: e.message,
        },
      ],
    });
  }
});

module.exports = {
  getUsers,
};
