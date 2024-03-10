const UserModel = require("../models/user.model");

module.exports = {
  async getAllUsers(request, response) {
    try {
      const users = await UserModel.findAll();
      return response.status(200).json({ users });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};
